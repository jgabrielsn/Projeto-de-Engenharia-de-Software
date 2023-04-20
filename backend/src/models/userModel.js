const connection = require('./connection');
const authModel = require('./authModel');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const getUser = async (Email) => {
    const query = 'SELECT * FROM users WHERE Email = ?';	
    const [user] = await connection.execute(query, [Email]);
    return user[0];
};

const createUser = async (user) => {

    const saltHash = authModel.genPassword(user.Password);
    
    const PasswordSalt = saltHash.salt;
    const Password = saltHash.hash;

    
    const { UserName,  Email} = user;
    
    const query = 'INSERT INTO users(UserName, created_at, Password, PasswordSalt, Email) VALUES (?, ?, ?, ?, ?)';

    const dateUTC = new Date(Date.now()).toUTCString();
    
    const [createdUser] = await connection.execute(query, [UserName, dateUTC, Password, PasswordSalt, Email]);
    
    const id = createdUser.insertId;

    const [userObject] = await connection.execute('SELECT * FROM users WHERE UserID = ?', [id]);

    return userObject[0];
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
    getUser,
    createUser,
    deleteUser,
    updateUser
};