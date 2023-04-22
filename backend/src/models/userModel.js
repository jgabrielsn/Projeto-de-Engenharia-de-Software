const connection = require('./connection');
const authModel = require('./authModel');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const getUserByEmail = async (Email) => {
    const query = 'SELECT * FROM users WHERE Email = ?';	
    const [user] = await connection.execute(query, [Email]);
    return user[0];
};

const createUser = async (user) => {

    const saltHash = authModel.genPassword(user.Password);
    
    const PasswordSalt = saltHash.salt;
    const Password = saltHash.hash;

    
    const { UserName,  Email} = user;
    
    const query = 'INSERT INTO users(Email, UserName, Password, PasswordSalt) VALUES (?, ?, ?, ?)';
    
    const [createdUser] = await connection.execute(query, [ Email, UserName, Password, PasswordSalt]);
    
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

const updateSaldo = async (id, body) => {
    const { Saldo } = body;
    const query = 'UPDATE users SET Saldo = ? WHERE UserID = ?';
    const [updatedSaldo] = await connection.execute(query, [Saldo, id]);
    return updatedSaldo;
};

const updateFormulario = async (id, formulario) => {
    const { Salario, Objetivo } = formulario;
    const query = 'UPDATE users SET Salario = ?, Objetivo = ? WHERE UserID = ?';
    const [updatedFormulario] = await connection.execute(query, [Salario, Objetivo, id]);
    return updatedFormulario;
};

module.exports = {
    getAll,
    getUserByEmail,
    createUser,
    deleteUser,
    updateUser,
    updateSaldo,
    updateFormulario
};