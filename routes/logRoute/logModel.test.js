const logDb = require('./logModel.js');
const userDb = require('../authRoute/authModel.js');
const db = require('../../data/dbConfig.js');

describe('logModel.js helper functions', () => {
    afterAll(async () => {
        await db('users').truncate();
        await db('logs').truncate();
    });

    describe('insert functionality for the logs table', () => {
        it('should return the id of newly created log', async () => {
            await userDb.addUser({username: 'mason', password: 'peanut', firstName: 'mason', lastName: 'karsevar'})

            let logs = await db('logs');
            expect(logs).toHaveLength(0);

            let log = await logDb.addLog({baitType: 'worms', waterBodyId: 1, fishId: 1, fishCount: 3, userId: 1, timeSpent: 1, timeOfDay: '3:00 pm'})
            expect(log).toEqual(1)
        })

        it('should store a log as an object', async () => {
            let log = await db('logs').first();
            expect(log).toEqual({id: 1, baitType: 'worms', waterBodyId: 1, fishId: 1, fishCount: 3, userId: 1, timeSpent: 1, timeOfDay: '3:00 pm'})
        })
    })

    describe('getAllWaterBodies function test', () => {
        it('should return an array of 493 different entries', async () => {
            let waterBodies = await logDb.getAllWaterBodies();

            expect(waterBodies).toHaveLength(493);
        })
        it('should contain individual objects that are {"facilityName": "Cow Lake","latitude": 47.135255996919575,"longitude": -118.15495300359936,"directions": "From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles."}', async () => {
            let waterBody = await logDb.getAllWaterBodies().first()

            expect(waterBody).toEqual({
                id: 1,
                "facilityName": "Cow Lake",
                "latitude": 47.135255996919575,
                "longitude": -118.15495300359936,
                "directions": "From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles."
            })
        }) 
    })
})