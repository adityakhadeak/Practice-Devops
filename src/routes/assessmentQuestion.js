const express = require('express')
const { createAssessment, updateAssessment, createAssessmentQuestion, updateAssessmentQuestion, createAssessmentQuestionOption, updateAssessmentQuestionOption, readAssessment, deleteAssessment, deleteAssessmentQuestion, deleteAssessmentQuestionOption, createAssessmentQuestionAndOptions } = require('../controllers/assessmentController')
const authentication = require('../middleware/authentication')

const routerAssessment=express()

// Create assessment
routerAssessment.post('/createassessment',createAssessment)
// Update assessment
routerAssessment.put('/updateassessment',updateAssessment)
// Delete assessment
routerAssessment.delete('/deleteassessment',deleteAssessment)


// Create assessment Questions
routerAssessment.post('/createassessmentques',createAssessmentQuestion)
// Update assessment Questions
routerAssessment.put('/updateassessmentques',updateAssessmentQuestion)
// Delete assessment Questions
routerAssessment.delete('/deleteassessmentques',deleteAssessmentQuestion)

// Create assessment Questions Option
routerAssessment.post('/createassessmentquesoption',createAssessmentQuestionOption)
// Update assessment Questions Option
routerAssessment.put('/updateassessmentquesoption',updateAssessmentQuestionOption)
// Delete assessment Questions Option
routerAssessment.delete('/deleteassessmentquesoption',deleteAssessmentQuestionOption)

//Read Assesment
routerAssessment.get('/readassessment',authentication,readAssessment)


//  Create assessment Questions
routerAssessment.post('/createassessmentquesnoption',createAssessmentQuestionAndOptions)

module.exports=routerAssessment