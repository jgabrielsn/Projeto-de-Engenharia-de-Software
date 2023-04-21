/* eslint-disable no-undef */

const request = require('supertest');
randomstring = require('randomstring');
email = randomstring.generate(7) + '@gmail.com';

describe('Register', () => {
    it('register a new user', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: 'Teste',
            Email: email,
            Password: '123456'
        });
        expect(response.statusCode).toBe(201);
    });
    it('register a user with no name', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: '',
            Email: email,
            Password: '123456'
        });
        expect(response.statusCode).toBe(400);
    });     
    it('register a user with no email', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: 'Teste',
            Email: '',
            Password: '123456'
        });
        expect(response.statusCode).toBe(400);
    });
    it('register a user with no password', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: 'Teste',
            Email:  email,
            Password: ''
        });
        expect(response.statusCode).toBe(400);
    });
    it('register a user with no name, email and password', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: '',
            Email: '',
            Password: ''
        });
        expect(response.statusCode).toBe(400);
    });
    it('register a user that already exists', async () => {
        const response = await request('http://localhost:3000').post('/register').send({
            UserName: 'Teste',
            Email:  email,
            Password: '123456'
        });
        expect(response.statusCode).toBe(400);
    });
});

describe('Login', () => {
    it('login with a valid user', async () => {
        const response = await request('http://localhost:3000').post('/login').send({
            Email:  email,
            Password: '123456'
        });
        expect(response.statusCode).toBe(200);
    });

    it('login with a invalid user', async () => {
        const response = await request('http://localhost:3000').post('/login').send({
            Email:  email,
            Password: '1234567'
        });
        expect(response.statusCode).toBe(401);
    });
    it('login with a no user', async () => {
        const response = await request('http://localhost:3000').post('/login').send({
            Email:  '',
            Password: ''
        });
        expect(response.statusCode).toBe(400);
    });
    it ('login with a no email', async () => {
        const response = await request('http://localhost:3000').post('/login').send({
            Email:  '',
            Password: '123456'
        });
        expect(response.statusCode).toBe(400);
    });
    it ('login with a no password', async () => {
        const response = await request('http://localhost:3000').post('/login').send({
            Email:  email,
            Password: ''
        });
        expect(response.statusCode).toBe(400);
    });
});

