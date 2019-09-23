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

router.post('/login', (req, res) => {
    let user = req.body;
    console.log('req from login', user)

    userDb.findUserByUsername({username: user.username})
        .first()
        .then(userInfo => {
            console.log('userInfo from the then block', userInfo)
            if(user && bcrypt.compareSync(user.password, userInfo.password)) {
                const token = userDb.generateToken(userInfo);
                res.status(200).json({
                    message: `${userInfo.username}, welcome back!`,
                    token,
                    userObject: {
                        username: userInfo.username,
                        lastName: userInfo.lastName,
                        firstName: userInfo.firstName
                    }
                })
            } else {
                res.status(401).json({message: 'invalid username or password'})
            }
        })
        .catch(error => {
            res.status(500).json({message: 'hello again!'})
        })
})

module.exports = router;