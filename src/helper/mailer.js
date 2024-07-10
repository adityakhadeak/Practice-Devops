const  nodemailer = require ('nodemailer')
const  dotenv = require ('dotenv')

dotenv.config()

const config = {
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
}
const transporter=nodemailer.createTransport(config)

 const sendMail= async(email,subject,content)=>{

    try {
        console.log(email)
        let message = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: content
        }

        transporter.sendMail(message,(error,info)=>{
            if (error) {
                console.log(error)
            }
            console.log('Mail sent',info.messageId)
        })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports= sendMail