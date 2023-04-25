const gastoModel = require('../models/gastoModel');

describe ('Testando as funções de gastos', () => {

    it('É possível criar um gasto', async () => {
        const newGasto = {
        UserID: 66,
        gastoNome: 'Sushi',
        valor: 90,
        data: '2023-07-01',
        categoria: 'Alimentação',
        };
        const createdGasto = await gastoModel.createGasto(newGasto);
        expect(createdGasto.insertId).toBeDefined();
        newGastoId = createdGasto.insertId;
    });

    it('É possível atualizar um gasto existente', async () => {
        // Cria um novo gasto para ser atualizado
        const newGasto = {
            UserID: 66,
            gastoNome: 'Sorvete',
            valor: 10,
            data: '2023-07-01',
            categoria: 'Alimentação',
        };
        const createdGasto = await gastoModel.createGasto(newGasto);

        // Atualiza o gasto criado
        const updatedGasto = {
            UserID: 66,
            gastoNome: 'Sorvete Atualizado',
            valor: 10,
            data: '2023-07-01',
            categoria: 'Alimentação',
        };
        const result = await gastoModel.updateGasto(createdGasto.insertId, updatedGasto);
        expect(result.affectedRows).toBe(1);
    });

    it('É possível deletar um gasto existente', async () => {
        // Cria um novo gasto para ser deletado
        const newGasto = {
            UserID: 66,
            gastoNome: 'Pizza',
            valor: 50,
            data: '2023-07-01',
            categoria: 66,
        };
        const createdGasto = await gastoModel.createGasto(newGasto);

        // Deleta o gasto criado
        const result = await gastoModel.deleteGasto(createdGasto.insertId);
        expect(result.affectedRows).toBe(1);
    });

    it('É possível listar todos os gastos', async () => {
        const gastos = await gastoModel.getAll();
        expect(gastos).toEqual(expect.any(Array));
    });

    it('É possível listar todos os gastos de um usuário', async () => {
        const id = 66;
        const gasto = await gastoModel.getAllGastosByID(id);
        expect(gasto).toEqual(expect.any(Array));
    });

    it('É possível listar um gasto pelo código', async () => {
        const codigo = 12;
        const gasto = await gastoModel.getGastoByCodigo(codigo);
        expect(gasto).toEqual(expect.any(Array));
    });
});
