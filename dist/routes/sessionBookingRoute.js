"use strict";

var express = require('express');
var routerSession = express();
var _require = require('../controllers/sessionBookingController.js'),
  createSessionBooking = _require.createSessionBooking,
  getAllSessionBookings = _require.getAllSessionBookings,
  updateSessionBooking = _require.updateSessionBooking,
  deleteSessionBooking = _require.deleteSessionBooking;
var authentication = require('../middleware/authentication.js');
routerSession.post('/create_session_booking', authentication, createSessionBooking);
routerSession.get('/getall_session_booking', getAllSessionBookings);
routerSession.put('/update_sessionbooking', authentication, updateSessionBooking);
routerSession["delete"]('/delete_session_booking/:id', authentication, deleteSessionBooking);
module.exports = routerSession;