const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('server', () => {
    describe('GET /hello', () => {
        it('should return 200 OK', () => {
            request(server)
            .get('/hello')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return api is up message in the response', () => {
            return request(server)
            .get('/hello')
            .expect({ message: 'API is up and running for Week3 Sprint'})
        })
    })
})