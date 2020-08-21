const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');
const bcryptjs = require('bcryptjs');
const Users = require('../users/users-model');


describe('auth-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })
    describe('testing environment is testing', () => {
        it('should use testing environment', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('POST to /api/auth/register', () => {
        it('should respond with status code 201 created', () => {
            return request(server)
            .post('/api/auth/register')
            .send({ username: 'hailey', password: 'pass123' })
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
        it('should respond with new user', () => {
            return request(server)
            .post('/api/auth/register')
            .send({ username: 'hailey', password: 'pass123' })
            .then(res => {
                expect(res.body.data.username).toBe('hailey')
            })
        })
    })

    describe('POST to /api/auth/login', () => {
        beforeEach(async () => {
            const user = { username: 'hailey', password: 'pass123'}
            const hash = bcryptjs.hashSync(user.password, 8)
            user.password = hash;

            await db('users').truncate()
            await db('users').insert(user)
        })
        it('should respond with status 200 OK', () => {
            return request(server)
            .post('/api/auth/login')
            .send({ username: 'hailey', password: 'pass123' })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
        it('should respond with a welcome message', () => {
            return request(server)
            .post('/api/auth/login')
            .send({ username: 'hailey', password: 'pass123' })
            .then(res => {
                expect(res.body.message).toContain('Welcome to the API of Dad Jokes')
            })
        })
    })
})