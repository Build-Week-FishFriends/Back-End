const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server.js tests', () => {
    afterAll(async () => {
        await db('users').truncate();
    })

    describe('/auth/register route', () => {
        it('should return id number of newly created user', () => {
            return request(server)
            .post('/auth/register') 
            .send({username: 'mason', password: 'mason', firstName: 'Mason', lastName: 'Karsevar'})
            .then(res => {
                expect(res.body).toBe(1)
            })
        })
    })

    // describe('/auth/login', () => {
    //     it('should return a status 200 when given a pre-existing username and password', function() {
    //         return request(server)
    //             .post('/auth/login')
    //             .send({username: 'mason', password: 'mason'})
    //             .set("Accept", "application/json")
    //             .expect("Content-Type", "application/json; charset=utf-8")
    //             .expect(200)
    //             .then(res => {
    //                 request(server)
    //                     .post('/auth/login')
    //                     .send({username: 'mason', password: 'mason'})
    //                     .expect(200)
    //             })
    //     })
    // })
})