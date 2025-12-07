import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  console.log("contact end point HIT ");
  const config = useRuntimeConfig();
  console.log("config", config);
  const body = await readBody(event);
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please fill in all inputs",
    });
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: 587,
    secure: false,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  const mailOptions = {
    from: `"EazzyGabby Form Bot" <sanusijohn0@gmail.com>`,
    to: config.clientEmail,
    subject: subject,
    text: message,
  };

  try {
    const info = await 
    transporter.sendMail(mailOptions);
     console.log("Email info", info);
    return { status: "success", message: "Email sent successfully" };
  } catch (err: any) {
    console.error("Email error", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
    });
  }
});
