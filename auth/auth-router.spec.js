// const request = require('supertest');
// const server = require('../api/server');
// const db = require('../database/dbConfig');
// const bcryptjs = require('bcryptjs');
// const Users = require('../users/users-model');


// describe('auth-router', () => {
//     beforeEach(async () => {
//         await db('users').truncate();
//     });

//     describe('POST /register', () => {
//         it('should respond with an added user', () => {
//             return request(server)
//                 .post('/api/auth/register')
//                 .send({ username: "Elizabeth", password: "pass123" })
//                 .then(res => {
//                     expect(res.body.data.username).toBe('Elizabeth')
//                 })
//         });
//     })
// })