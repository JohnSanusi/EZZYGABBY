import nodemailer from 'nodemailer'
import {H3Event, readBody} from "h3"

 export default defineEventHandler( async (event:H3Event) => {
    const body = await readBody(event)
    const {name, email, subject, message} = body;

    if(!name || !email || !subject || !message){
        return {status: 'error', message:"Please fill in all inputs"}
    }

    const config = useRuntimeConfig()

    const transporter = nodemailer.createTransport({
        host: config.SMPT_HOST,
        port: parseInt(config.SMPT_PORT),
        auth:{
            user: config.SMPT_USER,
            pass: config.SMPT_PASS
        }
    })

    const mailOptions = {
        from : `"${name}" <${email}>`,
        to:config.CLIENT_EMAIL,
        subject: subject,
        text: message
    }

    try {
        await transporter.sendMail(mailOptions)
        return{status:'success', message: 'Email sent successfully'}
    } catch (error) {
        console.error('Email error', error)
        return{ status: 'Error', message:"Email failed to send"}
    }
 })   

