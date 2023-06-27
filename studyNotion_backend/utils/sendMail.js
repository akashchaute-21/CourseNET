const nodemailer = require("nodemailer");

const sendMail =async (email,title,body)=>{
    try{
       let transport = nodemailer.createTransport({
         host:process.env.MAIL_HOST,
         auth:{
            user:process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
         }
       })
       const info = await transport.sendMail(
        {
            from:"yash",
            to: `${email}`,
            subject:`${title}`,
            html:`${body}`
        }
        )
        return info;
    }catch(error){
        console.log(error);
    
    }
}

module.exports = sendMail;