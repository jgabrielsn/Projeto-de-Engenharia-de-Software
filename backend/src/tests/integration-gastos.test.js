/* eslint-disable no-undef */

const request = require('supertest');

const token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2ODI1MjM2MzIxMTcsImV4cCI6MTY4MjUyNDIzNjkxN30.V96ptusbCcPsObbC-L8gwP9C_lKQjL8jh61g_acZrlOkamHxvWoitzNFjtbUGq-ZgH3RfqZQv2eQyCP0KGhjsZbOzc2wMxaLs5H_1ghmKPmLO6oRqop4dUgtTb4jRpfyoP8IyTMB4SkNoDMP00ti403fmfTsX5draKAmZq1LbgtynQ1JMYBqp1uj9IrU41GQ9OtqHuGnyAOKs_e1SDVe0LoMPqvoREps39hxiA4k_JdEZoiXBmBM27KRyYupI9dWJRiKrpuCqutyLE7fYMsx3v6oi92wmmnjyPIczY9H93tQydqL2ujBCF88qd1g6jjYoQ3oMqIYGmvLpGVVtsHw7UAlkrkIdKqUGqiEssT5Jve5i4WYpDQek9uAOU3705lmIWbCBAjEaqH44eVtP5wylEzpZ4Cu3eZDexTH6uMy4cpmmy3KPXADsRWNF0XQgyGdhiv4byAsaiJpIvex38MZxIt6uNN1ynoXBxZKI2dgiI73ynGd3qhX5tKIPlkh0bevH5qFtjmoDjn7y4-S3KWxc6cz-54LSwg55w-gPYGljI9OZRSZOF17zThrB8MkrDMyvjWHftpnisAcJKRICK6C9vSEyPz6uxZJZxSuTpdh9uNGyWa05AX9TSA7HJSIN3N-JGI7rfAIQijb1Sw8BEN8mI-JQK3LH8paixIfARhBvVA';

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
