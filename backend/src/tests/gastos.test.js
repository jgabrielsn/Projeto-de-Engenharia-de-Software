const supertest = require('supertest');

descibe('CRUD Gastos', () => {
    it ('Create a new gasto', async () => {
        const response = await request('http://localhost:3333').post('/gastos').send({
            UserID: "13",
            gastoNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            });
        expect(response.statusCode).toBe(201);
    });
});
