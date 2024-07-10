"use strict";

var express = require('express');
var _require = require('../controllers/notificationController'),
  sendNotificationToSpecificDevice = _require.sendNotificationToSpecificDevice,
  sendNotificationToMultipleDevice = _require.sendNotificationToMultipleDevice,
  sendNotificationToTopics = _require.sendNotificationToTopics,
  sendNotificationToBatch = _require.sendNotificationToBatch,
  saveToken = _require.saveToken,
  subscribeToTopic = _require.subscribeToTopic,
  unsubscribeFromTopic = _require.unsubscribeFromTopic;
var routerNotify = express();
routerNotify.post('/savetoken', saveToken);
routerNotify.post('/sendtospecificdevice', sendNotificationToSpecificDevice);
routerNotify.post('/sendtomultipledevice', sendNotificationToMultipleDevice);
routerNotify.post('/sendtotopic', sendNotificationToTopics);
routerNotify.post('/sendtobatch', sendNotificationToBatch);
routerNotify.post('/subscribetotopic', subscribeToTopic);
routerNotify.post('/unsubscribefromtopic', unsubscribeFromTopic);
module.exports = routerNotify;