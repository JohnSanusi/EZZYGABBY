import nodemailer from 'nodemailer'
import {H3Event, readBody} from "h3"

 export default defineEventHandler( async (event:H3Event) => {
    const body = await readBody(event)
    const {name, email, date,time,options, notes} = body;

    if(!name || !email || !date || !time || !options || !notes){
        return {status: 'error', message:"Please fill in all inputs"}
    }

    const config = useRuntimeConfig()

    const transporter = nodemailer.createTrasport({
        host: config.SMPT_HOST,
        port: parseInt(config.SMPT_PORT),
        auth:{
            user: config.SMPT_USER;
            pass: config.SMPT_PASS
        }
    })

    const bookingBody = `
    Name: ${name},
    Email: ${email},
    Date: ${date},
    Time: ${time},
    Service: ${options},
    Message: ${notes},
    `

    const mailOptions = {
        from : "EazzyGabby Booking Bot ",
        to:config.CLIENT_EMAIL,
        subject: "New Booking ",
        text: bookingBody
    }

    try {
        await transporter.sendMail(mailOptions)
        return{status:'success', message: 'Email sent successfully'}
    } catch (error) {
        console.error('Email error', error)
        return{ status: 'Error', message:"Email failed to send"}
    }
 })   

