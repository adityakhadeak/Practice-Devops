"use strict";

var express = require('express');
var routerTherapist = express();
var _require = require('../controllers/therapistMasterController'),
  createUser = _require.createUser,
  readUser = _require.readUser,
  updateUser = _require.updateUser,
  deleteUser = _require.deleteUser,
  readAllUsers = _require.readAllUsers;
var authentication = require('../middleware/authentication.js');
routerTherapist.post('/therapist_master', authentication, createUser);
routerTherapist.get('/therapist_master/:id', readUser);
routerTherapist.put('/therapist_master/:id', authentication, updateUser);
routerTherapist["delete"]('/therapist_master/:id', authentication, deleteUser);
routerTherapist.get('/therapist_master', readAllUsers);
module.exports = routerTherapist;