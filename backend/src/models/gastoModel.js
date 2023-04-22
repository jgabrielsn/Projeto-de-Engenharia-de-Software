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

const getAllGastosByID = async (id) => {
    const query = 'SELECT * FROM gastos WHERE UserID = ?';
    const [gasto] = await connection.execute(query, [id]);
    return gasto;
};

const getGastoByCodigo = async (codigo) => {
    const query = 'SELECT * FROM gastos WHERE codigo = ?';
    const [gasto] = await connection.execute(query, [codigo]);
    return gasto;
};

module.exports = {
    getAll,
    createGasto,
    deleteGasto,
    updateGasto,
    getAllGastosByID,
    getGastoByCodigo
};