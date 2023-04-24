const supertest = require('supertest');

descibe('CRUD Gastos', () => {
    it ('Create a new gasto', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: "13",
            gastoNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            });
        expect(response.statusCode).toBe(201);
    });
    it ('Create a new gasto with no UserID', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            gastoNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no gastoNome', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: "13",
            valor: "100.50",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no valor', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: "13",
            gastoNome: "teste",
            vencimento: "01/01/24",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no vencimento', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: "13",
            gastoNome: "teste",
            valor: "100.50",
            status: "Paga"
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Create a new gasto with no status', async () => {
        const response = await request('http://localhost:3000').post('/gastos').send({
            UserID: "13",
            gastoNome: "teste",
            valor: "100.50",
            vencimento: "01/01/24",
            }
        );
        expect(response.statusCode).toBe(400);
    });
    it ('Get gastos by UserID', async () => {
        const response = await request('http://localhost:3000').get('/gastos/13');
        expect(response.statusCode).toBe(200);
    });
    
    it ('Get gastos by codigo', async () => {
        const response = await request('http://localhost:3000').get('/gastos/13');
        expect(response.statusCode).toBe(200);
    });
    it ('Get gastos by codigo with no UserID', async () => {
        const response = await request('http://localhost:3000').get('/gastos//1');
        expect(response.statusCode).toBe(400);
    });
    it ('Get gastos by codigo with no codigo', async () => {
        const response = await request('http://localhost:3000').get('/gastos/13/');
        expect(response.statusCode).toBe(400);
    });
});
