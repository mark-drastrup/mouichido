const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
/* const sequelize = require("./config/config.json"); */
const { Op } = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require("./config");
const passport = require("passport");
const User = require("./models").User;
const Entry = require("./models").Entry;
const models = require('./models');

//Connecting to db
const sequelize = new Sequelize('mouichido', 'drastrup', 'DfUsHS48EJ4wxkbm', {
	host: 'localhost',
	dialect: 'postgres',
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});

//Configure app
app.use(bodyParser.json())
app.use(morgan("combined"));
app.use(cors());
require('./passport')

//Helper functions
function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7;
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	});
}

function isAuthenticated(req, res, next) {
	passport.authenticate("jwt", function (err, user) {
		if (err || !user) {
			res.status(403).send({
				error: "You have to be logged in to access this page"
			});
		} else {
			req.user = user;
			next();
		}
	})(req, res, next)
}


//Routes
app.get("/", function (req, res) {
	res.send("Connection established");
});

app.post("/register", async function (req, res) {
	try {
		const { username, password } = req.body;
		if(username === "") {
			return res.status(500).send({
				error: "Please provide a username"
			});
		} else if(password === "") {
			return res.status(500).send({
				error: "Please provide a password"
			});
		}

		const user = await User.create(req.body);
		const userJson = user.toJSON();
		res.send({
			user: userJson,
			token: jwtSignUser(userJson)
		});
	} catch (error) {
		res.status(500).send({
			error: "This username is already taken."
		});
	}
});

app.post("/login", async function (req, res) {
	try {
		const { username, password } = req.body;
		if(username === "") {
			return res.status(500).send({
				error: "Please provide a username"
			});
		} else if(password === "") {
			return res.status(500).send({
				error: "Please provide a password"
			});
		}

		const user = await User.findOne({
			where: {
				username: username
			}
		});

		if (!user) {
			return res.status(403).send({
				error: "The username was incorrect."
			});
		}

		const validPassword = await user.validPassword(password);

		if (!validPassword) {
			return res.status(403).send({
				error: "The password was incorrect."
			});
		}

		const userJson = user.toJSON();
		res.send({
			user: userJson,
			token: jwtSignUser(userJson)
		});
	} catch (error) {
		res.status(500).send({
			error: "An error has occured trying to log in."
		});
	}
});

app.get("/grammar", async function (req, res) {
	try {
		let grammar = null;
		const userId = req.query.userId;
		const search = req.query.search;
		const filter = JSON.parse(req.query.filter);
		const tags1 = new Array(filter.tags);
		const tags = [];
		console.log(`****************** Her er tags1: ${tags1} ************************`)
		console.log(`****************** Her er tags: ${tags} ************************`)

		console.log(`*********************** Tags: ${tags} ********************** DATATYPE: ${Array.isArray(tags)}`)
		if (search && (filter.showUnreviewed === false && filter.tags.length === 0)) {
			console.log(`************************* INDE I DEN GAMLE FUNKTION *************************`)
			grammar = await Entry.findAll({
				where: {
					UserId: userId,
					[Op.or]: [
						"title", "short_description", "tag"
					].map(key => ({
						[key]: {
							[Op.iLike]: `%${search}%`
						}
					}))
				}
			});
		} else if(filter.showUnreviewed === true || filter.tags.length !== 0) {
			console.log(`************************* INDE I DEN NYE FUNKTION *************************`)
			grammar = await Entry.findAll({
				where: {
					UserId: userId,
					is_reviewed: !filter.showUnreviewed,
					tag: {
						[Op.in]: `%${tags}%`
					},
					[Op.or]: [
						"title", "short_description"
					].map(key => ({
						[key]: {
							[Op.iLike]: `%${search}%`
						}
					}))
				}
			});
		}  else {
			console.log(`************************* INDE I DEN DEFAULT FUNKTIONEN *************************`)
			grammar = await Entry.findAll({
				where: {
					UserId: userId
				}
			});
		} 

		res.send(grammar)
	} catch (error) {
		console.log(error)
		res.status(500).send({
			error: 'An error has occured while trying to fetch grammar'
		})
	}
});

app.get("/grammar/:userId", isAuthenticated, async function (req, res) {
	try {
		const grammar = await Entry.findAll({
			limit: 1,
			where: {
				UserId: req.params.userId,
				is_reviewed: false
			},
			order: [["createdAt", "ASC"]]
		}).then(data => {
			res.send(data);
		});
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to fetch grammar"
		});
	}
});

app.get("/grammar/review/:grammarId", isAuthenticated, async function (req, res) {
	try {
		const grammar = await Entry.findById(req.params.grammarId).
			then(data => {
				res.send(data);
			});
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to fetch grammar"
		});
	}
});

app.post("/grammar", isAuthenticated, async function (req, res) {
	try {
		const entry = await Entry.create(req.body);
		res.send(entry);
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to save grammar."
		});
	}
});

app.put("/grammar", isAuthenticated, async function (req, res) {
	try {
		const entry = await Entry.update(req.body, {
			where: {
				id: req.body.id
			}
		});
		res.send(entry);
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to update grammar."
		});
	}
});

app.delete("/grammar/:id", isAuthenticated, async function (req, res) {
	try {
		/* await Entry.destroy({
			where: {
				id: req.params.id
			}
		}) */
		const grammar = await Entry.findById(req.params.id);
		await grammar.destroy();
		res.send(grammar);
		
		/* res.send(entry); */
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to delete grammar."
		});
	}
});

models.sequelize.sync()
	.then(() => {
		app.listen(process.env.PORT || 3000, () => {
			console.log("Connection has been established successfully.")
		});
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});
/* sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	}); */
/* app.listen(3000, () => {
	console.log("App is running on port 3000")
}) */
