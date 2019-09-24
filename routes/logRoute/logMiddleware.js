const logDb = require('./logModel.js');

function validatePost(req, res, next) {
    const logPost = req.body;

    if(logPost.waterBodyId && logPost.fishId) {
        next();
    } else {
        res.status(401).json({message: 'Missing either waterBodyId or fishId'});
    }
}

function attachFishId(req, res, next) {
    const logPost = req.body;
    console.log(logPost.fishId.toLowerCase())
    logDb.getFishIdByName(logPost.fishId.toLowerCase())
        .then(ids => {
            if(ids.length > 0) {
                req.body.fishId = ids[0].id
                next();
            } else {
                logDb.addFish(logPost.fishId.toLowerCase())
                    .then(ids => {
                        req.body.fishId = ids[0]
                        next();
                    })
                    .catch(err => {
                        res.status(500).json({message: 'error occurred when saving new fish type'})
                    })
            }
        })
}

module.exports = {
    attachFishId,
    validatePost
}