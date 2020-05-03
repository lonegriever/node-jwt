const router = require('express').Router();
const User = require('../../models/user');
const userValidator = require('../../validators/userValidator');
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    const {valid, errorMessage} = await userValidator(req.body);

    if (!valid) {
        return res.status(400).send(errorMessage)
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        email: req.body.email
    });

    try {
        await user.save();
        res.send("Registration successful.");   
    } catch(error) {
        res.status(401).send(error)
    }
});

module.exports = router;