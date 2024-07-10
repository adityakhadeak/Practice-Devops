const express = require('express');
const { user_assement } = require("../controllers/user_assement.controllers.js");

const appRoute = express();

appRoute.post('/userassesment', user_assement);

module.exports = appRoute