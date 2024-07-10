
 const oneMinuteExpiryCheck=async(otpTime)=>{
    try {
        const currentDate=new Date()
        var differnceInTime=(otpTime-currentDate.getTime())/1000

        differnceInTime/=60;
        if(Math.abs(differnceInTime)>1)return true

        return false
    } catch (error) {
        console.log(error)
    }
}

 const threeMinuteExpiryCheck=async(otpTime)=>{
    try {
        const currentDate=new Date()

        var differnceInTime=(otpTime-currentDate.getTime())/1000

        differnceInTime/=60;

        if(Math.abs(differnceInTime)>3)return true

        return false
    } catch (error) {
        console.log(error)
    }
}

module.exports={oneMinuteExpiryCheck,threeMinuteExpiryCheck}