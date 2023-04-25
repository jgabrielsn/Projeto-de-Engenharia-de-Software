/* eslint-disable no-undef */

const request = require('supertest');
randomstring = require('randomstring');
email = randomstring.generate(7) + '@gmail.com';

userToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2ODI0MjgxNzc0MTcsImV4cCI6MTY4MjQyODc4MjIxN30.hKV22QKp0QJmURsh71QglO5gVknm3T72k7W79omcDGk_AM1DO_yB5kgusfxg4tO7M87yPqtVuo2jW7aTzTmv599sqnwmm-V0akRqcjLLf4MHnFv_YeInVJDmpJHK4xEyFm1gqfdZOhSjoAQCJyt-q3JL1g1e2WMTJyQyuCkFd6h61DRJn0H2X3nJDHjBZ6Vl3fB13Y7RlloY6iBWbfSOEBABdnTLkcV7gKfvLT0SnllcoXnSbvz7jCetSCuH-wcSGbkG1dft4Me_HW38nZQMfVXZbH1tQcAzJfEVguZiTcTCA5KT3YhTI8-4qCTEkFPCatkIr7qivyddZZ1vljjdQqwXfk3aTIO2_LU7QVy2F9LKDWuk_aCvOgDzLccGGQT9-14obq_qXa475gFO_KB6ujNYOntqSN_fE_IrPjW30RQQPWE_NiW5wke-e7hnaICwX2CYMXywM9Iqv2-G1EsHj9h_QkcrMlBQfRIOw3Lpbe1_NQjGr6Prla_Y4qAvJ4RObdk9e0HBY1lQt93aZuzaHpytf5Jk-QVdL0_vvPlxWfSPljoiThPVOEaMgOgKkNdoSZz5rhZKssCf4PsMWVYZLMB_sibiVeZdF59KlW8REBiKwalbB6Eysr1PEVqd6wW1hrdN7r6yA0mZiQqoc4KVe6PxdBFUfANdsjo6PqkE-WU';

describe('Register', () => {
    it('register a new user', async () => {
        const response = await request('http://localhost:3000').post('/register')
            .send({
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
