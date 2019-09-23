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

function getAllLogs() {
    return db('logs as l')
        .join('fish-types as f', 'l.fishId', 'f.id')
        .join('water-bodies as w', 'l.waterBodyId', 'w.id')
        .join('users as u', 'l.userId', 'u.id')
        .select('u.username','l.userId', 'l.id as log_id', 'l.waterBodyId', 'f.fishName', 'l.fishCount', 'l.baitType', 'l.timeSpent', 'l.timeOfDay', 'w.facilityName', 'w.latitude', 'w.longitude')
}

function getLogsByUserId(userId) {
    return db('logs as l')
        .join('fish-types as f', 'l.fishId', 'f.id')
        .join('water-bodies as w', 'l.waterBodyId', 'w.id')
        .join('users as u', 'l.userId', 'u.id')
        .select('u.username','l.userId', 'l.id as log_id', 'l.waterBodyId', 'f.fishName', 'l.fishCount', 'l.baitType', 'l.timeSpent', 'l.timeOfDay', 'w.facilityName', 'w.latitude', 'w.longitude')
        .where({userId});
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
    getLogsByUserId,
    getAllLogs
}