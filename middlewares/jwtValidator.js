const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('authentication-token');
    if(!token) return res.status(401).send({message: 'You are not authorized to access this resource.'});

    try {
         const verified = jwt.verify(token, process.env.JWT_KEY);
         req.user = verified;
         next();
    } catch(error) {
        res.status(400).send('Invalid token');
    }
}