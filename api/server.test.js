const chai = require('chai');
const chaiHttp = require('chai-http')
const server = require('./server.js');
const db = require('../data/dbConfig.js');
const request = require('supertest');

chai.use(chaiHttp)

describe('server.js tests', () => {
    afterAll(async () => {
        await db('users').truncate();
    })

    describe('/waterBodies', () => {
        it('should return an array of waterBody objects', () => {
            return request(server)
                .get('/waterBodies')
                .expect(200)
                .then(res => {
                    expect(res.body).toHaveLength(49)
                })
        })
    })

    describe('/logRoute/all-logs', () => {
        it('should return an array of all the logs in the database', () => {
            return request(server) 
                .get('/logRoute/all-logs')
                .expect(200)
                .then(res => {
                    expect(res.body).toHaveLength(0)
                })
        })
    })

    describe('/logRoute/user-logs', () => {
        it('should return a 401 when not given a token', () => {
            return request(server) 
                .get('/logRoute/user-logs')
                .expect(401)
        })
    })

    describe('/logRoute/user-logs/delete-logs', () => {
        it('should return a 401 when not given a token', () => {
            return request(server) 
                .delete('/logRoute/user-logs/delete-logs/1')
                .expect(401)
        })
    })

    describe('/auth/register route', () => {
        it('should return id number of newly created user', () => {
            const object = {username: 'cotton', password: 'cotton', firstName: 'Mason', lastName: 'Karsevar'}
            return request(server)
                .post('/auth/register') 
                .send(object)
                .set("Accept", "application/json")
                .expect(200)
                
            })
        })
    })

    describe('/auth/login', () => {
        it('should return a status 200 when given a pre-existing username and password', function() {
            return request(server)
                .post('/auth/login')
                .send({username: 'cotton', password: 'cotton'})
                .set("Accept", "application/json")
                .expect("Content-Type", "application/json; charset=utf-8")
                .expect(200)
                .then(res => {
                    request(server)
                        .post('/auth/login')
                        .send({username: 'mason', password: 'mason'})
                        .expect(200)
                })
        })
    })