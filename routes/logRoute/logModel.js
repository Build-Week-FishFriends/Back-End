const db = require('../../data/dbConfig.js');

function addLog(log) {
    return db('logs')
        .insert(log)
        .then(ids => {
            const [id] = ids;
            return id;
        })
} 

function getAllLogsByWaterBodyId(waterBodyId) {
    return db('logs').where(waterBodyId)
}

function getLogsByUserId(userId) {
    return db('logs').where({userId});
}

function getLogsByFishId(fishId) {
    return db('logs').where(fishId);
}

function updateLog(id, log) {
    return db('logs').where({id}).update(log);
}

function deleteLog(id) {
    return db('logs').where({id}).del();
}

function getLogByWaterBodyId(id) {
    return db('logs').where({waterBodyId: id});
}

module.exports = {
    addLog,
    updateLog,
    deleteLog,
    getLogsByUserId
}