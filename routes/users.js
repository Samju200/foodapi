const router = require('express').Router();
// let User = require('../models/user');
const { signup, signin, google } = require('../controllers/user');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/signin').post(google);

module.exports = router;
