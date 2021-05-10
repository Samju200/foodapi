// let Message = require('../models/message');
// const getFeedback = async (req, res) => {
//   try {
//     const feedback = await Message.find({});
//     res.status(200).json({ feedback });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'server error' });
//   }
// };
// const feedback = async (req, res) => {
//   const { name, email, message } = req.body;
//   try {
//     const feedback = await Message.create({
//       name,
//       email,
//       message,
//     });
//     res
//       .status(200)
//       .json({ feedback, message: 'Your feedback successfully sent' });
//   } catch (error) {
//     res.status(500).json({ message: 'something went wrong' });
//   }
// };

// module.exports = { feedback, getFeedback };
