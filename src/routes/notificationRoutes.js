const express = require('express')
const { sendNotificationToSpecificDevice, sendNotificationToMultipleDevice, sendNotificationToTopics, sendNotificationToBatch, saveToken, subscribeToTopic, unsubscribeFromTopic } = require('../controllers/notificationController')
const { saveFCMTokenValidation, sendNotificationToSpecificDeviceValidation, sendNotificationToMultipleDeviceValidation, sendNotificationToTopicsValidation, subscribe_unsubscribeToTopicValidation } = require('../helper/validation')

const routerNotify = express()

routerNotify.post('/savetoken',saveFCMTokenValidation,saveToken)

routerNotify.post('/sendtospecificdevice',sendNotificationToSpecificDeviceValidation, sendNotificationToSpecificDevice)
routerNotify.post('/sendtomultipledevice',sendNotificationToMultipleDeviceValidation, sendNotificationToMultipleDevice)
routerNotify.post('/sendtotopic',sendNotificationToTopicsValidation, sendNotificationToTopics)
routerNotify.post('/sendtobatch', sendNotificationToBatch)


routerNotify.post('/subscribetotopic',subscribe_unsubscribeToTopicValidation, subscribeToTopic)
routerNotify.post('/unsubscribefromtopic', subscribe_unsubscribeToTopicValidation,unsubscribeFromTopic)


module.exports = routerNotify