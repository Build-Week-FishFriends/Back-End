const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logRoute = require('../routes/logRoute/logRoute.js')
const authRoute = require('../routes/authRoute/authRoute.js');
const waterBodyRoute = require('../routes/waterBodyRoute/waterBodyRoute.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRoute)
server.use('/waterBodies', waterBodyRoute)
server.use('/logRoute', logRoute);
server.use('/docs', express.static("./docs"));

server.use('/', (req, res) => {
    res.status(200).json({message: 'server base route is working!'});
});

module.exports = server;