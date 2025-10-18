// NODE Mailer!

//Inporter nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config()

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});


const mailOptions = {
    from: process.env.EMAIL,
    to: "sanaeguerrouj7@gmail.com",
    subject: "test from nodemailer  ",
    text: "Streamline email integration for your app or service with a unified REST API that seamlessly connects with IMAP, SMTP, Gmail API, and Microsoft Graph API."
}


transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error("error at sending email", err)
    } else {
        console.log("email send", info.response)
    }
})