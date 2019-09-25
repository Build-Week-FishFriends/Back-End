const request = require('supertest');
const server = require('./server.js');
const authRoute = require('../routes/authRoute/authRoute.js');
const db = require('../data/dbConfig.js');

describe('server.js tests', () => {
    afterAll(async () => {
        await db('users').truncate();
    })

    describe('/auth/register route', () => {
        it('should return id number of newly created user', () => {
            const object = {username: 'alice', password: 'alice', firstName: 'Mason', lastName: 'Karsevar'}
            return request(authRoute)
            .post('/auth/register') 
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .send(object)
            .then(res => {
                console.log(res)
                expect(res.body).toBe({ id: 1,
                    username: 'alice',
                    password:
                     '$2a$14$drP785YzyAb35ywtV0tFte1rGPFp5ftWKb.PyHxzvQqF9KNQ7uom6',
                    firstName: 'Mason',
                    lastName: 'Karsevar',
                    email: null })
            })
        })
    })

    describe('/auth/login', () => {
        it('should return a status 200 when given a pre-existing username and password', function() {
            return request(server)
                .post('/auth/login')
                .send({username: 'alice', password: 'alice'})
                .set("Accept", "application/json")
                .expect("Content-Type", "application/json; charset=utf-8")
                .expect(200)
                // .then(res => {
                //     request(server)
                //         .post('/auth/login')
                //         .send({username: 'mason', password: 'mason'})
                //         .expect(200)
                // })
        })
    })
})