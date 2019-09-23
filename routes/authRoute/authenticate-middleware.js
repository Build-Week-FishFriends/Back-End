const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, process.env.JSON_SECRET, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'invalid credentials'})
            }
            req.user = {id: decodedToken.subject, username: decodedToken.username}
            next();
        })
    } else {
        res.status(401).json({message: 'token not found'})
    }
}