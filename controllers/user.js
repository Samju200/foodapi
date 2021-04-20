const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let User = require('../models/user');
require('dotenv').config();

const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    location,
  } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: 'User already exists' });
    }
    if (confirmPassword !== password) {
      return res.status(404).json({ message: 'password doesnt match' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      location,
    });
    result.save();
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: 'user doesnt exist' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'invalid credential' });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

const google = async (req, res) => {
  try {
    // get token and action from request
    const { idToken } = data;
    // verify token
    const verify = await googleClient.verifyIdToken({
      idToken,
      audience: [process.env.GOOGLE_CLIENT_ID],
    });
    // select data from payload
    let { email_verified, name, email, picture } = verify.payload;

    // if email is verified
    if (email_verified) {
      // check for user existence in the database
      let user = await User.findOne({
        email,
      });
      let token = null;

      // if user is trying to sign up
      if (user && user.type === 'google') {
        token = jwt.sign({ email: user.email, id: user._id }, 'test', {
          expiresIn: '1h',
        });

        // pick only required fields
        user = _.pick(user, [
          '_id',
          'name',
          'email',
          'phone',
          'location',
          'active',
          'account_type',
        ]);
      } else if (user && !user.google) {
        res.status(400).json({ message: 'Google authentication failed.' });
      } else {
        // if user doesn't exist
        // data to be stored
        const data = {
          name,
          email: email.toLowerCase(),
          account_type: 'google',
        };
        // create the new user document
        user = User.create(data);
        token = jwt.sign({ email: user.email, id: user._id }, 'test', {
          expiresIn: '1h',
        });

        // pick only required fields
        user = _.pick(user, [
          '_id',
          'name',
          'email',
          'phone',
          'location',
          'active',
          'account_type',
        ]);
      }
      res.status(200).json({ message: 'User login successful', user, token });
    }
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

module.exports = { signup, signin, google };
