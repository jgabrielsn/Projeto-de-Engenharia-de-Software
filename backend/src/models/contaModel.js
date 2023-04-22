const connection = require('./connection');

const getAll = async () => {
    const [contas] = await connection.execute('SELECT * FROM contas');
    return contas;
};

const createConta = async (conta) => {
    const { contaNome, valor, vencimento, status, UserID } = conta;

    const query = 'INSERT INTO contas( contaNome, valor, vencimento, status, UserID) VALUES (?, ?, ?, ?, ?)';
    const [createdConta] = await connection.execute(query, [ contaNome, valor, vencimento, status, UserID]);
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
const getAllContasByID = async (id) => {
    const query = 'SELECT * FROM contas WHERE UserID = ?';
    const [conta] = await connection.execute(query, [id]);
    return conta;
};

const getContaByCodigo = async (codigo) => {
    const query = 'SELECT * FROM contas WHERE codigo = ?';
    const [conta] = await connection.execute(query, [codigo]);
    return conta;
};

module.exports = {
    getAll,
    createConta,
    deleteConta,
    updateConta,
    getAllContasByID,
    getContaByCodigo
};