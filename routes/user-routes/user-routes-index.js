const router = require('express').Router();
router.use(require('./create-user'));
router.use(require('./log-in-user'));
router.use(require('./show-user-profile'));

module.exports = router