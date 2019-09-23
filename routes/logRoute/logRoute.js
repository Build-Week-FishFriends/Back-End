router = require('express').Router();
logDb = require('./logModel.js');
authMiddleware = require('../authRoute/authenticate-middleware.js');

router.post('/', authMiddleware, (req, res) => {
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
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
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
