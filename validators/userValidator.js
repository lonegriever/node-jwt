const Joi = require('@hapi/joi');
const User = require('../models/user');

const schema = Joi.object({
    firstName: Joi.string().min(6).required().label("first name"),
    lastName: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const validator = async (params) => {
    const {error} = schema.validate(params);
    if (error) {
        return {valid: false, errorMessage: error.details[0].message}
    }
    const emailTaken = await User.findOne({email: params.email});
    if (emailTaken) return {valid: false, errorMessage: 'Email is already taken'};

    return {valid: true}
}

module.exports = validator;