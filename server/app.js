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

app.post("/register",isAuthenticated ,async function (req, res) {
	try {
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
		console.log(user);

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

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
