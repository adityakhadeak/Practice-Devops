const express =require('express')
const dynamicController = require('../controllers/dynamicController.js')

const routerDynamic=express()

routerDynamic.post('/',dynamicController)

module.exports=routerDynamic