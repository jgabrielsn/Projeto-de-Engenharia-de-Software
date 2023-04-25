/* eslint-disable no-undef */

const request = require('supertest');

const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2ODI0MjgxNzc0MTcsImV4cCI6MTY4MjQyODc4MjIxN30.hKV22QKp0QJmURsh71QglO5gVknm3T72k7W79omcDGk_AM1DO_yB5kgusfxg4tO7M87yPqtVuo2jW7aTzTmv599sqnwmm-V0akRqcjLLf4MHnFv_YeInVJDmpJHK4xEyFm1gqfdZOhSjoAQCJyt-q3JL1g1e2WMTJyQyuCkFd6h61DRJn0H2X3nJDHjBZ6Vl3fB13Y7RlloY6iBWbfSOEBABdnTLkcV7gKfvLT0SnllcoXnSbvz7jCetSCuH-wcSGbkG1dft4Me_HW38nZQMfVXZbH1tQcAzJfEVguZiTcTCA5KT3YhTI8-4qCTEkFPCatkIr7qivyddZZ1vljjdQqwXfk3aTIO2_LU7QVy2F9LKDWuk_aCvOgDzLccGGQT9-14obq_qXa475gFO_KB6ujNYOntqSN_fE_IrPjW30RQQPWE_NiW5wke-e7hnaICwX2CYMXywM9Iqv2-G1EsHj9h_QkcrMlBQfRIOw3Lpbe1_NQjGr6Prla_Y4qAvJ4RObdk9e0HBY1lQt93aZuzaHpytf5Jk-QVdL0_vvPlxWfSPljoiThPVOEaMgOgKkNdoSZz5rhZKssCf4PsMWVYZLMB_sibiVeZdF59KlW8REBiKwalbB6Eysr1PEVqd6wW1hrdN7r6yA0mZiQqoc4KVe6PxdBFUfANdsjo6PqkE-WU';

describe('CRUD Contas', () => {
    it ('Create a new conta', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(201);
    });
    it ('Create a new conta with no UserID', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no contaNome', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no valor', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            contaNome: 'teste',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no vencimento', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no status', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('create a new conta with no recorrencia', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with invalid UserID', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: 'a',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with a user that does not exist', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: '1',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(404);
    });
    it ('Get all contas', async () => {
        const response = await request('http://localhost:3000').get('/contas').set('authorization', token);
        expect(response.statusCode).toBe(200);
    });
    it ('Get all contas by user ID', async () => {
        const response = await request('http://localhost:3000').get('/users/contas/13').set('authorization', token);
        expect(response.statusCode).toBe(200);
    });
    it ('Get conta by user ID with invalid ID', async () => {
        const response = await request('http://localhost:3000').get('/users/contas/A').set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Update conta', async () => {
        const response = await request('http://localhost:3000').put('/contas/80').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(204);
    });
    it ('Update conta with a codigo that does not exist', async () => {
        const response = await request('http://localhost:3000').put('/contas/600').send({
            UserID: '13',
            contaNome: 'teste',
            valor: '100.50',
            vencimento: '01/01/24',
            status: 'Paga',
            recorrencia: '1m'
        }).set('authorization', token);
        expect(response.statusCode).toBe(404);
    });
    it ('Delete conta', async () => {
        const response = await request('http://localhost:3000').delete('/contas/80').set('authorization', token);
        expect(response.statusCode).toBe(204);
    });
    it ('Delete conta with invalid codigo', async () => {
        const response = await request('http://localhost:3000').delete('/contas/A').set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
    it ('Delete conta with no codigo', async () => {
        const response = await request('http://localhost:3000').delete('/contas').set('authorization', token);
        expect(response.statusCode).toBe(404);
    });
    it ('Get conta by codigo', async () => {
        const response = await request('http://localhost:3000').get('/contas/4').set('authorization', token);
        expect(response.statusCode).toBe(200);
    });
    it ('Get conta by codigo with invalid codigo', async () => {
        const response = await request('http://localhost:3000').get('/contas/A').set('authorization', token);
        expect(response.statusCode).toBe(400);
    });
});