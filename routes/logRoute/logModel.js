const db = require('../../data/dbConfig.js');

function addLog(log) {
    return db('logs')
        .insert(log)
        .then(ids => {
            const [id] = ids;
            return id;
        })
} 

function getAllWaterBodies() {
    return db('water-bodies')
}

function updateLog(id, log) {
    return db('logs').where({id})
}

function getLogByWaterBodyId(id) {
    return db('logs').where({waterBodyId: id})
}

module.exports = {
    addLog,
    getAllWaterBodies,
}