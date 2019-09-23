const db = require("../../data/dbConfig.js");

module.exports = {
    getAllWaterBodies,
    getWaterBodyById,
    getWaterBodyByFacilityName
}

function getAllWaterBodies() {
    return db("water-bodies")
}

function getWaterBodyById(waterBodyId) {
    return db("water-bodies").where("id", waterBodyId)
}

function getWaterBodyByFacilityName(facilityName) {
    return db("water-bodies").where({ facilityName })
}
