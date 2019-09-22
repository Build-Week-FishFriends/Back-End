const express = require('express');
const bcrypt = require('bcryptjs');

const userDb = require('./authModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'base auth route is printing something!!!'});
});

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    userDb.addUser(user) 
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

module.exports = router;