const router = require('express').Router();
const { getSubscribe, subscribe } = require('../controllers/subscribe');

router.route('/subscribe').get(getSubscribe);
router.route('/subscribe').post(subscribe);

module.exports = router;
