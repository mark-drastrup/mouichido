const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');
const OktaJwtVerifier = require('@okta/jwt-verifier');
const User = require("../db/models").User;
const Entry = require("../db/models").Entry;

app.listen(3000, () => {
    console.log("App is running on port 3000")
})
