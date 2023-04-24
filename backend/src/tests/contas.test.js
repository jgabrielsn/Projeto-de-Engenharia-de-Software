

const request = require('supertest');

describe('CRUD Contas', () => {
    it ('Create a new conta', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "13",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga",
            recorrencia: "1m"
            });
        expect(response.statusCode).toBe(201);
    });
    it ('Create a new conta with no UserID', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no contaNome', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "13",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no valor', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "13",
            contaNome: "teste",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no vencimento', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "13",
            contaNome: "teste",
            valor: "100.50",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with no status', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "13",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with invalid UserID', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "a",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new conta with a user that does not exist', async () => {
        const response = await request('http://localhost:3000').post('/contas').send({
            UserID: "1",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
        });
        expect(response.statusCode).toBe(404);
    });
    it ('Get all contas', async () => {
        const response = await request('http://localhost:3000').get('/contas');
        expect(response.statusCode).toBe(200);
    });
    it ('Get all contas by user ID', async () => {
        const response = await request('http://localhost:3000').get('/users/contas/13');
        expect(response.statusCode).toBe(200);
    });
    it ('Get conta by user ID with invalid ID', async () => {
        const response = await request('http://localhost:3000').get('/users/contas/A');
        expect(response.statusCode).toBe(400);
    });
    it ('Update conta', async () => {
        const response = await request('http://localhost:3000').put('/contas/10').send({
            UserID: "13",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga",
            recorrencia: "1m"
        });
        expect(response.statusCode).toBe(204);
    });
    it ('Update conta with a codigo that does not exist', async () => {
        const response = await request('http://localhost:3000').put('/contas/600').send({
            UserID: "13",
            contaNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
        });
        expect(response.statusCode).toBe(400);
    });
    it ('Delete conta', async () => {
        const response = await request('http://localhost:3000').delete('/contas/10');
        expect(response.statusCode).toBe(204);
    });
    it ('Delete conta with invalid codigo', async () => {
        const response = await request('http://localhost:3000').delete('/contas/A');
        expect(response.statusCode).toBe(400);
    });
    it ('Delete conta with no codigo', async () => {
        const response = await request('http://localhost:3000').delete('/contas');
        expect(response.statusCode).toBe(404);
    });
    it ('Get conta by codigo', async () => {
        const response = await request('http://localhost:3000').get('/contas/4');
        expect(response.statusCode).toBe(200);
    });
    it ('Get conta by codigo with invalid codigo', async () => {
        const response = await request('http://localhost:3000').get('/contas/A');
        expect(response.statusCode).toBe(400);
    });
    
    
});
