import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { name, email, date, time, options, notes } = body;

  if (!name || !email || !date || !time || !options || !notes) {
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

  const bookingBody = `
  New Booking Recieved
    Name: ${name},
    Email: ${email},
    Date: ${date},
    Time: ${time},
    Service: ${options},
    Message: ${notes},
    `;

  const mailOptions = {
    from: `"EazzyGabby Booking Bot "<${config.smtpUser}>`,
    to: config.clientEmail,
    subject: "New Booking ",
    text: bookingBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "success", message: "Email sent successfully" };
  } catch (err: any) {
    console.error("Email error", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
    });
  }
});
