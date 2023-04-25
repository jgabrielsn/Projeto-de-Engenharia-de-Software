/* eslint-disable no-undef */

const request = require('supertest');

const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2ODI0MjgxNzc0MTcsImV4cCI6MTY4MjQyODc4MjIxN30.hKV22QKp0QJmURsh71QglO5gVknm3T72k7W79omcDGk_AM1DO_yB5kgusfxg4tO7M87yPqtVuo2jW7aTzTmv599sqnwmm-V0akRqcjLLf4MHnFv_YeInVJDmpJHK4xEyFm1gqfdZOhSjoAQCJyt-q3JL1g1e2WMTJyQyuCkFd6h61DRJn0H2X3nJDHjBZ6Vl3fB13Y7RlloY6iBWbfSOEBABdnTLkcV7gKfvLT0SnllcoXnSbvz7jCetSCuH-wcSGbkG1dft4Me_HW38nZQMfVXZbH1tQcAzJfEVguZiTcTCA5KT3YhTI8-4qCTEkFPCatkIr7qivyddZZ1vljjdQqwXfk3aTIO2_LU7QVy2F9LKDWuk_aCvOgDzLccGGQT9-14obq_qXa475gFO_KB6ujNYOntqSN_fE_IrPjW30RQQPWE_NiW5wke-e7hnaICwX2CYMXywM9Iqv2-G1EsHj9h_QkcrMlBQfRIOw3Lpbe1_NQjGr6Prla_Y4qAvJ4RObdk9e0HBY1lQt93aZuzaHpytf5Jk-QVdL0_vvPlxWfSPljoiThPVOEaMgOgKkNdoSZz5rhZKssCf4PsMWVYZLMB_sibiVeZdF59KlW8REBiKwalbB6Eysr1PEVqd6wW1hrdN7r6yA0mZiQqoc4KVe6PxdBFUfANdsjo6PqkE-WU';

describe('CRUD Gastos', () => {
    it ('Create a new gasto', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: 13,
            gastoNome: 'teste',
            valor: 100.50,
            data: '01/01/24',
            categoria: 'outros'
        }).set('authorization', token);
        expect(response.statusCode).toBe(201);
    });
    it ('Create a new gasto with no UserID', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            gastoNome: 'teste',
            valor: '100.50',
            data: '01/01/24',
            categoria: 'outros'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no gastoNome', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: '13',
            valor: '100.50',
            data: '01/01/24',
            categoria: 'outros'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no valor', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: '13',
            gastoNome: 'teste',
            data: '01/01/24',
            categoria: 'outros'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no vencimento', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: '13',
            gastoNome: 'teste',
            valor: '100.50',
            categoria: 'outros'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no status', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: '13',
            gastoNome: 'teste',
            valor: '100.50',
            data: '01/01/24',
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Get gastos by UserID', async () => {
        const response = await request('http://localhost:3000').get('/gastos/13').set('authorization', token);
        expect(response.statusCode).toBe(200);
    });
    
    it ('Get gastos by codigo', async () => {
        const response = await request('http://localhost:3000').get('/gastos/13').set('authorization', token);
        expect(response.statusCode).toBe(200);
    });
});
