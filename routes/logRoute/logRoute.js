router = require('express').Router();
logDb = require('./logModel.js');
authMiddleware = require('../authRoute/authenticate-middleware.js');
logMiddleware = require('./logMiddleware.js')

router.post('/', logMiddleware.validatePost, authMiddleware, logMiddleware.attachFishId, (req, res) => {
    let log = req.body;
    log.userId = req.user.id;
    console.log(log)

    logDb.addLog(log)
        .then(results => {
            res.status(201).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
});

router.get('/user-logs', authMiddleware, (req, res) => {
    logDb.getLogsByUserId(req.user.id)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
});

router.get('/user-logs/:id', (req, res) => {
    logDb.getLogsByUserId(req.params.id)
        .then(results => {
            if(results.length > 0) {
                res.status(200).json(results)
            } else {
                res.status(404).json({message: 'user id does not exist'})
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
});

router.delete('/user-logs/delete-logs/:id', authMiddleware, logMiddleware.validateUserId, (req, res) => {
    logDb.deleteLog(req.params.id) 
        .then(results => {
            if(results) {
                res.status(200).json({message: `log with id ${req.params.id} has been deleted`, results})
            } else {
                res.status(404).json({message: `log with id ${req.params.id} can not be found`})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'unable to delete entry'})
        })
})

router.get('/user-logs/update-logs/:id', (req, res) => {
    logDb.getLogById(req.params.id)
        .then(results => {
            if(results.length > 0) {
                res.status(200).json(results)
            } else {
                res.status(404).json({message: 'log id does not exist'})
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.put("/user-logs/update/:id", authMiddleware, logMiddleware.validatePost, logMiddleware.validateUserId, logMiddleware.attachFishId, (req, res) => {

    logDb.updateLog(req.params.id, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({message: `There was an error updating this post: ${err}`})
        })
})

router.get("/user-logs/waterBody/:id", (req, res) => {
    logDb.getLogsByWaterBodyId(req.params.id)
        .then(result => {
            console.log("result in .then: ", result)
            if(result.length > 0) {
                res.status(200).json(result)
            } else {
                res.status(404).json({message: `Could not find any logs for that water body`})
            }
        })
        .catch(err => {
            res.status(500).json({error: `There was an error retrieving logs: ${err}`})
        })
})

router.get('/all-logs', (req, res) => {
    logDb.getAllLogs()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

module.exports = router;
