import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    service:'gmail',
    port:465,
    secure:true,
    auth:{
        user:"navjotkapatia111@gmail.com",
        pass:"ungx hzer gkzh rjme"
    }
})