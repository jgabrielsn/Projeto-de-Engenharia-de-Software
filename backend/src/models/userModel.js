const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const createUser = async (user) => {
    const { name } = user;

    const query = 'INSERT INTO users(name, created_at) VALUES (?, ?)';

    const dateUTC = new Date(Date.now()).toUTCString();
    
    const [createdUser] = await connection.execute(query, [name, dateUTC]);
    return {insertId : createdUser.insertId};
};

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?';

    const [removedUser] = await connection.execute(query, [id]);
    return removedUser;
};

const updateUser = async (id, user) => {
    const { name } = user;

    const query = 'UPDATE users SET name = ? WHERE id = ?';
    
    const [updatedUser] = await connection.execute(query, [name, id]);
    return updatedUser;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};