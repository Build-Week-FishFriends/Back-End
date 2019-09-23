const db = require('../../data/dbConfig.js');
const userDb = require('./authModel.js');

describe('authModel.js helper functions', () => {
    afterEach(async () => {
        await db('users').truncate();
    });

    describe('insert functionality for the register route', () => {
        it('should return id of newly created user', async () => {
            let users = await db('users');
            expect(users).toHaveLength(0);

            let user = await userDb.addUser({username: 'mason', password: 'peanut'});
            expect(user).toBe(1)
        })
        it('should store added user as an object {id, username, password}', async () => {
            let id = await userDb.addUser({username: 'mason', password: 'mason'});
            const user = await db('users').where({id}).first();
            expect(user).toEqual({id: 1, username: 'mason', password: 'mason'})
        })
    })

    describe('findByUsername helper function', () => {
        it('should return the object of the disclosed username example {id, username, password}', async () => {
            const id = await userDb.addUser({username: 'alice', password: 'alice'});
            const id2 = await userDb.addUser({username: 'kieth', password: 'moshier'});

            const user = await userDb.findUserByUsername({id});
            const user2 = await userDb.findUserByUsername({id: id2});

            expect(user).toEqual([{id: 1, username: 'alice', password: 'alice'}]);
            expect(user2).toEqual([{id: 2, username: 'kieth', password: 'moshier'}]);
        })
    })
})