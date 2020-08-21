const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


describe('jokes-router', () => {
    let token
    beforeEach(async () => {
        await request(server)
        .post('/api/auth/register')
        .send({ username: 'hailey', password: 'pass123' })
        .then(res => {
            token = res.body.token
        })
        await db('users').truncate()
        //generates token, register here
    })

    describe('GET /api/jokes', () => {
        it('should respond with status 401 when not logged in', () => {
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(401)
                })
        })
        it('should give user a message when not logged in', () => {
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.body.message).toContain("Please provide your credentials")
            })
        })
    })
})