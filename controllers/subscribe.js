let Subscribe = require('../models/subscribe');
const getSubscribe = async (req, res) => {
  try {
    const subscribe = await Subscribe.find({});
    res.status(200).json({ subscribe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
const subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const subscribe = await Subscribe.create({
      email,
    });
    res.status(200).json({ message: 'Your feedback successfully sent' });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

module.exports = { subscribe, getSubscribe };
