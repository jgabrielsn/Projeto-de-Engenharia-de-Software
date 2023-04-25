const contasModel = require('../models/contaModel');

describe ('Testando as funções de contas', () => {
   
    it('É possível criar uma conta', async () => {
        const newConta = {
        contaNome: 'Aluguel',
        valor: 1500,
        vencimento: '2023-05-01',
        recorrencia: '1m',
        status: 'pendente',
        UserID: 66,
        };
        const createdConta = await contasModel.createConta(newConta);
        expect(createdConta.insertId).toBeDefined();
        newContaId = createdConta.insertId;
    });

    it('É possível atualizar uma conta existente', async () => {
        // Cria uma nova conta para ser atualizada
        const newConta = {
          contaNome: 'Escola',
          valor: 3000,
          vencimento: '2023-05-01',
          recorrencia: '1m',
          status: 'pendente',
          UserID: 66,
        };
        const createdConta = await contasModel.createConta(newConta);
  
        // Atualiza a conta criada
        const updatedConta = {
          contaNome: 'Escola Atualizada',
          valor: 3000,
          vencimento: '2023-06-01',
          status: 'pago',
        };
        const result = await contasModel.updateConta(createdConta.insertId, updatedConta);
        expect(result.affectedRows).toBe(1);
      });

      it('É possível deletar uma conta existente', async () => {
        // Cria uma nova conta para ser deletada
        const newConta = {
          contaNome: 'Imposto de renda',
          valor: 4500,
          vencimento: '2023-05-01',
          recorrencia: '1y',
          status: 'pendente',
          UserID: 66,
        };
        const createdConta = await contasModel.createConta(newConta);
  
        // Deleta a conta criada
        const result = await contasModel.deleteConta(createdConta.insertId);
        expect(result.affectedRows).toBe(1);
      });

    it('É possível listar todas as contas', async () => {
        const contas = await contasModel.getAll();
        expect(contas).toEqual(expect.any(Array));
    });

    it('É possível listar todas as contas de um usuário', async () => {
        const id = 66;
        const conta = await contasModel.getAllContasByID(id);
        expect(conta).toEqual(expect.any(Array));
    });

    it('É possível listar uma conta pelo código', async () => {
        const codigo = 12;
        const conta = await contasModel.getContaByCodigo(codigo);
        expect(conta).toEqual(expect.any(Array));
    });
});
