const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoute = require('../routes/authRoute/authRoute.js');
const waterBodiesRoute = require('../routes/waterBodiesRoute/waterBodyRoute.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRoute)
server.use('/waterBodies', waterBodiesRoute)

server.use('/', (req, res) => {
    res.status(200).json({message: 'server base route is working!'});
});

module.exports = server;