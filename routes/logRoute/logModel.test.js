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

    describe('getAllLogs function', () => {
        it('should return an array of all the logs', async () => {
            let logs = await logDb.getAllLogs();
            expect(logs).toHaveLength(1);
        })
        it('should return an object', async () => {
            let logs = await logDb.getAllLogs();
            expect(logs).toEqual([{baitType: "worms", facilityName: "Cow Lake", fishCount: 3, fishName: "yellow perch", latitude: 47.135255996919575, log_id: 1, longitude: -118.15495300359936, timeOfDay: "3:00 pm", timeSpent: 1, userId: 1, username: "mason", waterBodyId: 1}])
        })
    })

    describe('getLogsByUserId function', () => {
        it('should return the logs of a passed in userId', async () => {
            await userDb.addUser({username: 'alice', password: 'peanut', firstName: 'mason', lastName: 'karsevar'})

            await logDb.addLog({baitType: 'live worms', waterBodyId: 2, fishId: 1, fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm'})

            let logs = await logDb.getLogsByUserId(1);
            expect(logs[0].userId).toBe(1);
        })
        it('should return an array with objects', async () => {
            let logs = await logDb.getLogsByUserId(1);
            expect(logs).toEqual([{baitType: "worms", facilityName: "Cow Lake", fishCount: 3, fishName: "yellow perch", latitude: 47.135255996919575, log_id: 1, longitude: -118.15495300359936, timeOfDay: "3:00 pm", timeSpent: 1, userId: 1, username: "mason", waterBodyId: 1}])
        })
        it('should return an empty array if the userId does not have logs', async () => {
            let logs = await logDb.getLogsByUserId(3);
            expect(logs).toEqual([])
        })
    })

    describe('getLogById function', () => {
        it('should return an object with the specified log id', async () => {
            let log = await logDb.getLogById(2);
            expect(log).toEqual([{"baitType": "live worms", "fishCount": 3, "fishId": "yellow perch", "id": 2, "timeOfDay": "3:00 pm", "timeSpent": 1, "userId": 2, "waterBodyId": 2}])
        })
        it('should return an empty array if the id does not exist', async () => {
            let log = await logDb.getLogById(3);
            expect(log).toEqual([])
        })
    })

    describe('getLogsByWaterBodyId function', () => {
        it('should return an array with objects of the specified waterBodyId', async () => {
            await logDb.addLog({baitType: 'live worms', waterBodyId: 1, fishId: 1, fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm'});

            let logs = await logDb.getLogsByWaterBodyId(1);
            expect(logs.length).toBe(2)
        })
    })
})