const db = require('../../data/dbConfig.js');

function addLog(log) {
    return db('logs')
        .insert(log)
        .then(ids => {
            const [id] = ids;
            return id;
        })
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
    return db('logs').where({fishId});
}

function updateLog(id, updatedLog) {
    return db('logs').where({id}).update(updatedLog);
}

function deleteLog(id) {
    return db('logs').where({id}).del();
}

function getLogById(id) {
    return db('logs as l') 
        .join('fish-types as f', 'l.fishId', 'f.id')
        .select('l.userId', 'l.timeSpent', 'l.id', 'l.fishCount', 'l.timeOfDay', 'l.waterBodyId', 'l.baitType', 'f.fishName as fishId')
        .where('l.id', id)
}

function getLogsByWaterBodyId(id) {
    return db('logs')
        .join('fish-types as f', 'l.fishId', 'f.id')
        .join('water-bodies as w', 'l.waterBodyId', 'w.id')
        .join('users as u', 'l.userId', 'u.id')
        .select('u.username','l.userId', 'l.id as log_id', 'l.waterBodyId', 'f.fishName', 'l.fishCount', 'l.baitType', 'l.timeSpent', 'l.timeOfDay', 'w.facilityName', 'w.latitude', 'w.longitude')
        .where({waterBodyId: id});
}

function getFishIdByName(fishName) {
    return db('fish-types')
        .where({fishName})
}

function addFish(fishName) {
    return db('fish-types').insert({fishName})
}

module.exports = {
    getLogById,
    addLog,
    updateLog,
    deleteLog,
    getLogsByUserId,
    getAllLogs,
    getLogsByWaterBodyId,
    getFishIdByName,
    addFish
}