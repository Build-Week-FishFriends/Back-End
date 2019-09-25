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
        it('should return an array with specific object configuration', async () => {
            let logs = await logDb.getLogsByWaterBodyId(2);
            expect(logs).toEqual([{"baitType": "live worms", "facilityName": "Lyle Lake", "fishCount": 3, "fishName": "yellow perch", "latitude": 46.89539955746871, "log_id": 2, "longitude": -119.20315122196122, "timeOfDay": "3:00 pm", "timeSpent": 1, "userId": 2, "username": "alice", "waterBodyId": 2}])
        })
    })

    describe('getFishByName', () => {
        it('should return the object of the passed fish name', async () => {
            const fish = await logDb.getFishIdByName('sockeye salmon');
            expect(fish[0]).toEqual({id: 8, fishName: 'sockeye salmon'})

        })
    })

    describe('deleteLog function', () => {
        it('should return 1 if an existing log has been deleted', async () => {
            const id = await logDb.addLog({baitType: 'live worms', waterBodyId: 1, fishId: 1, fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm'});
            expect(id).toBe(4);
            const result = await logDb.deleteLog(4);
            expect(result).toBe(1)
        })
        it('should return 0 if the specified log no longer exists', async () => {
            const result = await logDb.deleteLog(4);
            expect(result).toBe(0)
        })
    })

    describe('updateLog function', () => {
        it('should return 1 if an existing log has been modified', async () => {
            const id = await logDb.addLog({baitType: 'live worms', waterBodyId: 1, fishId: 1, fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm'});
            expect(id).toBe(5)
            const updateObject = {baitType: 'worms', waterBodyId: 2, fishId: 1, fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm'}
            const result = await logDb.updateLog(id, updateObject);
            expect(result).toBe(1)
        })
        it('should modify the specific log in the database', async () => {
            const log = await logDb.getLogById(5)
            expect(log).toEqual([{baitType: 'worms', waterBodyId: 2, fishId: 'yellow perch', fishCount: 3, userId: 2, timeSpent: 1, timeOfDay: '3:00 pm', id: 5}])
        })
    })
})