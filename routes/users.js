const router = require('express').Router();
// let User = require('../models/user');
const {
  signup,
  signin,

  getPortfolioData,
} = require('../controllers/user');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/signup').post(signup);
router.route('/signin').post(signin);
// router.route('/google').post(google);
// router.route('/facebook').post(facebook);
router.route('/portfolio').get(getPortfolioData);

module.exports = router;
