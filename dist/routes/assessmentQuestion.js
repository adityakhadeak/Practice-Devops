"use strict";

var express = require('express');
var _require = require('../controllers/assessmentController'),
  createAssessment = _require.createAssessment,
  updateAssessment = _require.updateAssessment,
  createAssessmentQuestion = _require.createAssessmentQuestion,
  updateAssessmentQuestion = _require.updateAssessmentQuestion,
  createAssessmentQuestionOption = _require.createAssessmentQuestionOption,
  updateAssessmentQuestionOption = _require.updateAssessmentQuestionOption,
  readAssessment = _require.readAssessment,
  deleteAssessment = _require.deleteAssessment,
  deleteAssessmentQuestion = _require.deleteAssessmentQuestion,
  deleteAssessmentQuestionOption = _require.deleteAssessmentQuestionOption,
  createAssessmentQuestionAndOptions = _require.createAssessmentQuestionAndOptions;
var authentication = require('../middleware/authentication');
var routerAssessment = express();

// Create assessment
routerAssessment.post('/createassessment', createAssessment);
// Update assessment
routerAssessment.put('/updateassessment', updateAssessment);
// Delete assessment
routerAssessment["delete"]('/deleteassessment', deleteAssessment);

// Create assessment Questions
routerAssessment.post('/createassessmentques', createAssessmentQuestion);
// Update assessment Questions
routerAssessment.put('/updateassessmentques', updateAssessmentQuestion);
// Delete assessment Questions
routerAssessment["delete"]('/deleteassessmentques', deleteAssessmentQuestion);

// Create assessment Questions Option
routerAssessment.post('/createassessmentquesoption', createAssessmentQuestionOption);
// Update assessment Questions Option
routerAssessment.put('/updateassessmentquesoption', updateAssessmentQuestionOption);
// Delete assessment Questions Option
routerAssessment["delete"]('/deleteassessmentquesoption', deleteAssessmentQuestionOption);

//Read Assesment
routerAssessment.get('/readassessment', authentication, readAssessment);

//  Create assessment Questions
routerAssessment.post('/createassessmentquesnoption', createAssessmentQuestionAndOptions);
module.exports = routerAssessment;