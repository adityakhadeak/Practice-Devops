const express = require('express');
const routerMatchQuestion = express();
const dynamicController = require('../controllers/matchTherapistQuesionController.js'); 

// Import authentication middleware
const authentication = require('../middleware/authentication');


routerMatchQuestion.post('/match_therapist', authentication, dynamicController);




module.exports = routerMatchQuestion;
