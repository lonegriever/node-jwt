const router = require('express').Router();

// router.use('/api/authentication', require('./authentication'));
router.use('/api/user', require('./user-routes/user-routes-index'));

module.exports = router;