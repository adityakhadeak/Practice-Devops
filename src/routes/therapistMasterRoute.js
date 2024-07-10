const express =require('express')
const routerTherapist=express()
const { createUser, readUser, updateUser, deleteUser,readAllUsers } = require('../controllers/therapistMasterController');

const   authentication  = require('../middleware/authentication.js');

routerTherapist.post('/therapist_master',authentication,createUser);
routerTherapist.get('/therapist_master/:id', readUser);
routerTherapist.put('/therapist_master/:id', authentication,updateUser);
routerTherapist.delete('/therapist_master/:id',authentication, deleteUser);
routerTherapist.get('/therapist_master', readAllUsers);

module.exports=routerTherapist