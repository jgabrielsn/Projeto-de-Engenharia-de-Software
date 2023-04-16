const connection = require('./connection');

const getAll = async () => {
    const [contas] = await connection.execute('SELECT * FROM contas');
    return contas;
};

const createConta = async (conta) => {
    const { contaNome, valor, vencimento, status } = conta;

    const query = 'INSERT INTO contas(createTime, contaNome, valor, vencimento, status) VALUES (?, ?, ?, ?, ?)';

    const dateUTC = new Date(Date.now()).toUTCString();
    
    const [createdConta] = await connection.execute(query, [dateUTC, contaNome, valor, vencimento, status]);
    return {insertId : createdConta.insertId};
};

const deleteConta = async (codigo) => {
    const query = 'DELETE FROM contas WHERE codigo = ?';

    const [removedConta] = await connection.execute(query, [codigo]);
    return removedConta;
};

const updateConta = async (codigo, conta) => {
    const { contaNome, valor, vencimento, status } = conta;

    const query = 'UPDATE contas SET contaNome = ? , valor = ? , vencimento = ? , status = ?  WHERE codigo = ?';
    
    const [updatedConta] = await connection.execute(query, [contaNome, valor, vencimento, status, codigo]);
    return updatedConta;
};

module.exports = {
    getAll,
    createConta,
    deleteConta,
    updateConta
};