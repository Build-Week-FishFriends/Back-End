const express = require('express');
const bcrypt = require('bcryptjs');

const userDb = require('./authModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'base auth route is printing something!!!'});
});

module.exports = router;