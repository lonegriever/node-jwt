const router = require('express').Router();
const tokenValidator = require('../../middlewares/jwtValidator');



router.get('/private', tokenValidator, (req, res) => {
    res.json({posts: {title: 'private resources'}})
});

module.exports = router