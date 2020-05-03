const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(404).send({message: 'The email or password is incorrect'});
    
    const validPassowrd = await bcrypt.compare(req.body.password, user.password);
    if (!validPassowrd) return res.status(400).send({message: 'The email or password is incorrect'});

    const token = jwt.sign({id: user._id}, process.env.JWT_KEY);
    res.header('authentication-token', token).send(token);

    res.status(200).send({message: 'Successfully logged in'});
});

module.exports = router;