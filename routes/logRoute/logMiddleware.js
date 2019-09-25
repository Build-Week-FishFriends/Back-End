
const userDb = require('../authRoute/authModel.js') 
const waterBodyDb = require("../waterBodyRoute/waterBodyModel.js");
const logDb = require("./logModel.js");


function validatePost(req, res, next) {
    const logPost = req.body;
    if (Object.keys(req.body).length > 0) {
        if(logPost.waterBodyId && logPost.fishId) {
            next();
        } else {
            res.status(401).json({message: 'Missing either waterBodyId or fishId.'});
        }
    } else {
        res.status(401).json({message: 'Missing request body.'})
    }
}

function checkUserId(req, res, next) {
    const userId = req.params.id;
    userDb.findUserById(userId) 
        .then(results => {
            if (results.length > 0) {
                next();
            } else {
                res.status(404).json({message: `UserId ${userId} can't be found`})
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
}

function checkWaterBodyId2(req, res, next){
    const waterBodyId = req.params.id;
    waterBodyDb.getWaterBodyById(waterBodyId) 
        .then(results => {
            if (results.length > 0) {
                next();
            } else {
                res.status(404).json({message: `Can't find water body with id of ${waterBodyId}`})
            }
        })
        .catch(err => {
            res.status(500).json({error: `Missing waterBodyId field`})
        })
}

function checkWaterBodyId(req, res, next) {
    const waterBodyId = req.body.waterBodyId;
    waterBodyDb.getWaterBodyById(waterBodyId) 
        .then(results => {
            if (results.length > 0) {
                next();
            } else {
                res.status(404).json({message: `Can't find water body with id of ${waterBodyId}`})
            }
        })
        .catch(err => {
            res.status(500).json({error: `Missing waterBodyId field`})
        })
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
                        res.status(500).json({message: `An error occurred when saving new fish type: ${err}`})
                    })
            }
        })
        .catch(err => {
            res.status(500).json({message: `An error occured while accessing the fish database: ${err}`})
        })
}

function validateUserId(req, res, next) {
    const logId = req.params.id;
    console.log("logID: ", logId)
    logDb.getLogById(logId) 
        .then(results => {
            console.log(results.length)
            if(results.length !== 0) {
                const tokenUserId = req.user.id;
                console.log("token UserID: ", tokenUserId)
                if(tokenUserId === results[0].userId) {
                    next();
                } else {
                    res.status(403).json({message: 'UserId mismatch: users can only modify their own posts.'})
                }
            } else {
                res.status(404).json({message: `Can't find log with id ${req.params.id}`}) 
            }
        })
        .catch(err => {
            res.status(500).json({message: `There was an error validating userId: ${err}`})
        })
}


module.exports = {
    validateUserId,
    attachFishId,
    validatePost,
    checkUserId,
    checkWaterBodyId,
    checkWaterBodyId2
}