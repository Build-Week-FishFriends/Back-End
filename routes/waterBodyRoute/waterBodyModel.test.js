const waterBodyDb = require("./waterBodyModel.js");
const db = require("../../data/dbConfig.js");


describe("waterBodyModel.js", () => {
    // beforeEach(async () => {
    //     await db("water-bodies").truncate();
    // })

    it("gets all water bodies", async () => {
        let results = await waterBodyDb.getAllWaterBodies();
        expect(results).toHaveLength(49)
    })

})

describe("water bodies with filter", async () => {
    it("gets waterBody by ID", async () => {
        let waterBodyId = 1;
        let filtered = await waterBodyDb.getWaterBodyById(waterBodyId);
        expect(filtered[0].facilityName).toBe("Cow Lake")
    })
})

