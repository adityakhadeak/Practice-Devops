const express =require('express')
const routerSession=express()
const { createSessionBooking, getAllSessionBookings, updateSessionBooking, deleteSessionBooking} = require('../controllers/sessionBookingController.js');
const  authentication  = require('../middleware/authentication.js');

routerSession.post('/create_session_booking',authentication, createSessionBooking);
routerSession.get('/getall_session_booking', getAllSessionBookings);
routerSession.put('/update_sessionbooking', authentication,updateSessionBooking);
routerSession.delete('/delete_session_booking/:id',authentication, deleteSessionBooking);

module.exports=routerSession