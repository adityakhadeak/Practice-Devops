"use strict";

var express = require('express');
var dynamicController = require('../controllers/dynamicController.js');
var routerDynamic = express();
routerDynamic.post('/', dynamicController);
module.exports = routerDynamic;