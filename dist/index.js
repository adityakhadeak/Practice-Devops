"use strict";

var express = require('express');
var dotenv = require('dotenv');
var routerAuth = require('./routes/authRoutes.js');
var _require = require('express-rate-limit'),
  rateLimit = _require["default"];
var _require2 = require('helmet'),
  helmet = _require2["default"],
  xssFilter = _require2.xssFilter;
var routerAssessment = require('./routes/assessmentQuestion.js');
var routerDynamic = require('./routes/dynamicRoute.js');
var routerReels = require('./routes/reelsRoutes.js');
var path = require('path');
var route = require("./routes/activeSessions.routes.js");
var appRoute = require('./routes/user_assesment.routes.js');
var blogRoute = require('./routes/blogRoute.routes.js');
var routerTherapist = require('./routes/therapistMasterRoute.js');
var routerSession = require('./routes/sessionBookingRoute.js');
var routerMatchQuestion = require('./routes/matchTherapistQuesionRoute.js');
var routerDailyPost = require('./routes/dailyPostRoute.js');
var routerNotify = require('./routes/notificationRoutes.js');
var app = express();
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});
console.log(process.env.PORT);
app.use(express.json());
app.use(xssFilter());
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later'
}));

//Aditya
//for checking purpose that the server is running or not
app.get('/', function (req, res) {
  res.send("Swasthmind_Dev API's  are running :)");
});

//fcm_notifications
app.use('/api/notification', routerNotify);

// login and register
app.use('/api/auth', routerAuth);

//assessment Questions
app.use('/api/assessment', routerAssessment);

//reels
app.use('/api/reels', routerReels);

//dynamicRouter
app.use('/api/dynamic', routerDynamic);

//Raju

//active_sessions
app.use("/api", route);

//userAssessment
app.use('/api', appRoute);

//blogs
app.use('/api/blog', blogRoute);

//Shakthi

//Therapist_Master
app.use('/api/therapist', routerTherapist);

//Session_Booking
app.use('/api/sessionbooking', routerSession);

//Match_Therapist_Question
app.use('/api', routerMatchQuestion);

//Daily_post

app.use('/api', routerDailyPost);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Connected to Port  ".concat(port, " "));
});