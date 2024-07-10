"use strict";

var express = require('express');
var routerMatchQuestion = express();
var dynamicController = require('../controllers/matchTherapistQuesionController.js');

// Import authentication middleware
var authentication = require('../middleware/authentication');
routerMatchQuestion.post('/match_therapist', authentication, dynamicController);
module.exports = routerMatchQuestion;