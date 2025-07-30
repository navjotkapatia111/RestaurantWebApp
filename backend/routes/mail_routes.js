// import express from 'express'
// import { transporter } from '../controller/mail.js'

// export const mail_route = express.Router()
// mail_route.post('/text-mail',async(req,res)=>{
//     const resetLink = 'http://localhost:5001/api/v1/router/reset'
//     try{
//         const {to,subject,text} = req.body
//         const maildata = {
//             from:"navjotkapatia111@gmail.com",
//             to:to,
//             subject:subject,
//             title:text,
//             html:`<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
//         }
//         const info = await transporter.sendMail(maildata)
//         res.status(200).send({message:"Message Sent to your email please check",message_id:info.messageId})
//     }
//     catch(error){
//         console.log("Internal Server Error:- ",error.message)
//     }
// })