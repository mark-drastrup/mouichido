const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require("./config");
const passport = require("passport");
const User = require("./models").User;
const Entry = require("./models").Entry;


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
	passport.authenticate("jwt", function(err, user) {
		if(err || !user) {
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
app.get("/", (req, res) => {
	res.send("Test");
});

app.post("/register", async function (req, res) {
	try {
		console.log(req.body);
		const user = await User.create(req.body);
		const userJson = user.toJSON();
		res.send({
			user: userJson,
			token: jwtSignUser(userJson)
		});
	} catch (error) {
		res.status(400).send({
			error: "This email account is already used."
		});
	}
});

app.post("/login", async function (req, res) {
	try {
		const { username, password } = req.body;
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

/* app.get("/grammar/:userId", isAuthenticated, async function(req, res) {
	try {
		let grammar = await Entry.findAll({
			where: {
				UserId: req.params.userId
			}
		});
		res.send(grammar);
	} catch (error) {	
		res.status(500).send({
			error: "An error has occured while trying to fetch grammar"
		});
	}
}); */

app.get("/grammar/:grammarId", isAuthenticated, async function(req, res) {
	try {
		console.log("Jeg er inde")
		const grammar = await Entry.findAll({
			limit: 1,
			where: {
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

app.post("/grammar", isAuthenticated, async function(req, res) {
	try {
		const entry = await Entry.create(req.body);
		res.send(entry);
	} catch (error) {
		res.status(500).send({
			error: "An error has occured while trying to save grammar."
		});
	}
});

app.put("/grammar", isAuthenticated, async function(req, res) {
	try {
		console.log("Jeg er inde");
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

/* app.post("/grammar", isAuthenticated, async function(req, res) {
	try {
		const entry = await User.findById(1)
		.then(user => { 
			user.createEntry(req.body)
		})
		.then(response => {
			console.log(response)
			const entryJson = entry.toJSON;
			res.send({
				entry: entryJson
			});
		}); 
		
	} catch (error) {
		res.status(400).send({
			error: "An error has occured while trying to save grammar."
		});
	}
}); */

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
