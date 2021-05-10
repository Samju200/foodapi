const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Axios = require('Axios');
let User = require('../models/user');
let Portfolio = require('../models/portfolio');

require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
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
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phone,
      location,
    });

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

// const google = async (req, res) => {
//   try {
//     // get token and action from request
//     const { idToken } = data;
//     // verify token
//     const verify = await googleClient.verifyIdToken({
//       idToken,
//       audience: [process.env.GOOGLE_CLIENT_ID],
//     });
//     // select data from payload
//     let { email_verified, name, email, picture } = verify.payload;

//     // if email is verified
//     if (email_verified) {
//       // check for user existence in the database
//       let user = await User.findOne({
//         email,
//       });
//       let token = null;

//       // if user is trying to sign up
//       if (user && user.type === 'google') {
//         token = jwt.sign({ email: user.email, id: user._id }, 'test', {
//           expiresIn: '1h',
//         });

//         // pick only required fields
//         user = _.pick(user, [
//           '_id',
//           'name',
//           'email',
//           'phone',
//           'location',
//           'active',
//           'account_type',
//         ]);
//       } else if (user && !user.google) {
//         res.status(400).json({ message: 'Google authentication failed.' });
//       } else {
//         // if user doesn't exist
//         // data to be stored
//         const data = {
//           name,
//           email: email.toLowerCase(),
//           account_type: 'google',
//         };
//         // create the new user document
//         user = User.create(data);
//         token = jwt.sign({ email: user.email, id: user._id }, 'test', {
//           expiresIn: '1h',
//         });

//         // pick only required fields
//         user = _.pick(user, [
//           '_id',
//           'name',
//           'email',
//           'phone',
//           'location',
//           'active',
//           'account_type',
//         ]);
//       }
//       res.status(200).json({ message: 'User login successful', user, token });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'something went wrong' });
//   }
// };
// const facebook = async (req, res) => {
//   try {
//     // get userID, accessToken and action from request
//     const { userID, accessToken } = req.body;

//     if (!userID) {
//       res.status(400).json({ message: 'Facebook userId not provided' });
//     }

//     if (!accessToken) {
//       res.status(400).json({ message: 'Access token not provided' });
//     }
//     const axios = new Axios(req, res);
//     const urlGraphFacebook = `https://graph.facebook.com/${userID}?fields=email,name&access_token=${accessToken}`;

//     const facebookData = await axios.getCall(urlGraphFacebook);

//     let { name, id, email } = facebookData;

//     name = name.split(' ');
//     const firstName = name[0].toLowerCase();
//     const lastName = name[1].toLowerCase();

//     let user = await User.findOne({
//       facebookId: id,
//     });

//     if (user) {
//       const token = jwt.sign(
//         { email: user.email || null, id: user._id },
//         'test',
//         { expiresIn: '1h' }
//       );

//       // pick only required fields
//       user = _.pick(user, [
//         '_id',
//         'name',
//         'email',
//         'phone',
//         'location',
//         'active',
//         'account_type',
//       ]);

//       res.status(200).json({ message: { user, token } });
//     } else {
//       const userEmail = email ? email.toLowerCase() : null;
//       const data = {
//         name: `${firstName} ${lastName}`,
//         email: userEmail,
//         facebook_id: id,
//         account_type: 'facebook',
//       };
//       // create the new user in the database
//       user = User.create(data);
//       const token = jwt.sign(
//         { email: user.email || null, id: user._id },
//         'test',
//         { expiresIn: '1h' }
//       );
//       // pick only required fields
//       user = _.pick(user, [
//         '_id',
//         'name',
//         'email',
//         'phone',
//         'location',
//         'active',
//         'account_type',
//       ]);
//       res.status(200).json({ message: 'User login successful', user, token });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'something went wrong' });
//   }
// };
// const getPortfolioData = async (req, res) => {
//   try {
//     const portfolioData = await Portfolio.find({});
//     res.status(200).json({ message: ' successful', portfolioData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'server error' });
//   }
// };
module.exports = { signup, signin };
