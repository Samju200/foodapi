let Message = require('../models/message');
const transporter = require('../config/mailer');
require('dotenv').config();
const getFeedback = async (req, res) => {
  try {
    const feedback = await Message.find({});
    res.status(200).json({ feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
const feedback = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const feedback = await Message.create({
      name,
      email,
      message,
    });
    const mailOptions = {
      from: process.env.Email,
      to: email,
      subject: `<h3>SAMJU </h3>`,
      html: `<p>Thanks for contacting us. We will get back to you shortly</p>`,
    };

    // res.status(200).json({ message: 'Your feedback successfully sent' });
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later',
    });
  }
  //   res.status(200).json({ message: 'Your feedback successfully sent' });
  // } catch (error) {
  //   res.status(500).json({ message: 'something went wrong' });
  // }
};

module.exports = { feedback, getFeedback };
