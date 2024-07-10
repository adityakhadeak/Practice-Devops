"use strict";

var express = require('express');
var _require = require("../controllers/user_assement.controllers.js"),
  user_assement = _require.user_assement;
var appRoute = express();
appRoute.post('/userassesment', user_assement);
module.exports = appRoute;