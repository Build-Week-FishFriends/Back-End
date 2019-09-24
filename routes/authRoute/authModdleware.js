function validateRegisterPost(req, res, next) {
    if (Object.keys(req.body).length > 0) {
        const registerPost = req.body;

        if (registerPost.username && registerPost.password && registerPost.lastName && registerPost.firstName) {
            next();
        } else {
            res.status(401).json({message: 'missing either username, password, lastName, or firstName in request body'})
        }
    } else {
        res.status(401).json({message: 'missing request body'})
    }
}

module.exports = {
    validateRegisterPost
}