require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Email, // your email address to send email from
    pass: 'process.env.Email_password', // your gmail account password
  },
});

module.exports = transporter;
