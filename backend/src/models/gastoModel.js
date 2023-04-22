const connection = require('./connection');

const getAll = async () => {
    const [gasto] = await connection.execute('SELECT * FROM gastos');
    return gasto;
};

const createGasto = async (gasto) => {
    const { UserID, gastoNome, valor, data, categoria } = gasto;

    const query = 'INSERT INTO gastos( UserID, gastoNome, valor, data, categoria) VALUES (?, ?, ?, ?, ?)';
    
    const [createdGasto] = await connection.execute(query, [ UserID, gastoNome, valor, data, categoria]);
    return {insertId : createdGasto.insertId};
};

const deleteGasto = async (codigo) => {
    const query = 'DELETE FROM gastos WHERE codigo = ?';

    const [removedGasto] = await connection.execute(query, [codigo]);
    return removedGasto;
};

const updateGasto = async (codigo, gasto) => {
    const { gastoNome ,valor, data, categoria  } = gasto;

    const query = 'UPDATE gastos SET gastoNome = ?, valor = ? , data = ? , categoria = ?  WHERE codigo = ?';
    
    const [updatedGasto] = await connection.execute(query, [gastoNome ,valor, data, categoria, codigo]);
    return updatedGasto;
};

module.exports = {
    getAll,
    createGasto,
    deleteGasto,
    updateGasto
};