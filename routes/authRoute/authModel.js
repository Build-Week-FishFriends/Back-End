const db = require('../../data/dbConfig.js');
const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const secret = process.env.JSON_SECRET;

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}

function findUserById(id) {
    return db('users').where({id});
}

function findUserByUsername(filter) {
    return db('users').where(filter)
}

function findUserById(id) {
    return db('users').where({id});
}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return id;
        })
}

module.exports = {
    findUserByUsername,
    addUser, 
    generateToken,
    findUserById, 
    generateToken
}