const express =require('express')
const dotenv=require('dotenv')
const routerAuth = require('./routes/authRoutes.js')
const { default: rateLimit } = require('express-rate-limit')
const { default: helmet, xssFilter } = require('helmet')
const routerAssessment = require('./routes/assessmentQuestion.js')
const routerDynamic = require('./routes/dynamicRoute.js')
const routerReels = require('./routes/reelsRoutes.js')
const path= require('path')
const route =require( "./routes/activeSessions.routes.js");
const appRoute  = require('./routes/user_assesment.routes.js');
const blogRoute = require( './routes/blogRoute.routes.js');
const routerTherapist = require('./routes/therapistMasterRoute.js')
const routerSession = require('./routes/sessionBookingRoute.js')
const routerMatchQuestion = require('./routes/matchTherapistQuesionRoute.js')
const routerDailyPost = require('./routes/dailyPostRoute.js')
const routerNotify = require('./routes/notificationRoutes.js')

const app=express()

app.use('/public', express.static(path.join(__dirname, 'public')));

dotenv.config({path:path.resolve(__dirname,'../.env')})

console.log(process.env.PORT)

app.use(express.json())

app.use(xssFilter())

app.use(helmet())

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: 'Too many requests from this IP, please try again later'
}))

//Aditya
//for checking purpose that the server is running or not
app.get('/',(req,res)=>{
    res.send("Swasthmind_Dev API's  are running :)")
})

//fcm_notifications
app.use('/api/notification',routerNotify)


// login and register
app.use('/api/auth',routerAuth)

//assessment Questions
app.use('/api/assessment',routerAssessment)

//reels
app.use('/api/reels',routerReels)

//dynamicRouter
app.use('/api/dynamic',routerDynamic)

//Raju

//active_sessions
app.use("/api",route);

//userAssessment
app.use('/api',appRoute);

//blogs
app.use('/api/blog',blogRoute)

//Shakthi

//Therapist_Master
app.use('/api/therapist',routerTherapist)

//Session_Booking
app.use('/api/sessionbooking',routerSession)

//Match_Therapist_Question
app.use('/api',routerMatchQuestion)

//Daily_post

app.use('/api',routerDailyPost)


const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Connected to Port  ${port} `)
})