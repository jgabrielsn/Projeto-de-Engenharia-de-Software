const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const createUser = async (user) => {
    const { UserName } = user;

    const query = 'INSERT INTO users(UserName, created_at) VALUES (?, ?)';

    const dateUTC = new Date(Date.now()).toUTCString();
    
    const [createdUser] = await connection.execute(query, [UserName, dateUTC]);
    return {insertId : createdUser.insertId};
};

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE UserID = ?';

    const [removedUser] = await connection.execute(query, [id]);
    return removedUser;
};

const updateUser = async (id, user) => {
    const { UserName } = user;

    const query = 'UPDATE users SET UserName = ? WHERE UserID = ?';
    
    const [updatedUser] = await connection.execute(query, [UserName, id]);
    return updatedUser;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};