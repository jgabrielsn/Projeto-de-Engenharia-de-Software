/* eslint-disable no-undef */

const request = require('supertest');

const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2ODI1MjM2MzIxMTcsImV4cCI6MTY4MjUyNDIzNjkxN30.V96ptusbCcPsObbC-L8gwP9C_lKQjL8jh61g_acZrlOkamHxvWoitzNFjtbUGq-ZgH3RfqZQv2eQyCP0KGhjsZbOzc2wMxaLs5H_1ghmKPmLO6oRqop4dUgtTb4jRpfyoP8IyTMB4SkNoDMP00ti403fmfTsX5draKAmZq1LbgtynQ1JMYBqp1uj9IrU41GQ9OtqHuGnyAOKs_e1SDVe0LoMPqvoREps39hxiA4k_JdEZoiXBmBM27KRyYupI9dWJRiKrpuCqutyLE7fYMsx3v6oi92wmmnjyPIczY9H93tQydqL2ujBCF88qd1g6jjYoQ3oMqIYGmvLpGVVtsHw7UAlkrkIdKqUGqiEssT5Jve5i4WYpDQek9uAOU3705lmIWbCBAjEaqH44eVtP5wylEzpZ4Cu3eZDexTH6uMy4cpmmy3KPXADsRWNF0XQgyGdhiv4byAsaiJpIvex38MZxIt6uNN1ynoXBxZKI2dgiI73ynGd3qhX5tKIPlkh0bevH5qFtjmoDjn7y4-S3KWxc6cz-54LSwg55w-gPYGljI9OZRSZOF17zThrB8MkrDMyvjWHftpnisAcJKRICK6C9vSEyPz6uxZJZxSuTpdh9uNGyWa05AX9TSA7HJSIN3N-JGI7rfAIQijb1Sw8BEN8mI-JQK3LH8paixIfARhBvVA';

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