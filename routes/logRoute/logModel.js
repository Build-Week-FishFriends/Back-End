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

module.exports = {
    addLog,
    getAllWaterBodies,
}