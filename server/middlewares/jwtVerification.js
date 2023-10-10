
const jwt = require('jsonwebtoken');

const jwtVerification = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'There is no token' });
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!verifyToken) {
        return res.status(403).json({message: 'Invalid Token'});
    }

    console.log(verifyToken);
    req.user = verifyToken

    next();
}

module.exports = jwtVerification;