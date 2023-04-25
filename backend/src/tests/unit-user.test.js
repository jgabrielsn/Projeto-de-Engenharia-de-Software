/* eslint-disable no-undef */

const connection = require('../models/connection');
const authModel = require('../models/authModel');
const {
    getAll,
    getUserByEmail,
    createUser,
    deleteUser,
    updateUser,
    updateSaldo,
    updateFormulario,
    updateMeta,
    getUserByID,
    updateSenha
} = require('../models/userModel');

jest.mock('../models/connection');

describe('getAll', () => {
    it('should return all users', async () => {
        const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        connection.execute.mockResolvedValue([users]);
        const result = await getAll();
        expect(result).toEqual(users);
    });
});

describe('getUserByEmail', () => {
    it('should return user by email', async () => {
        const user = { id: 1, name: 'John', email: 'john@example.com' };
        const email = 'john@example.com';
        connection.execute.mockResolvedValue([[user]]);
        const result = await getUserByEmail(email);
        expect(result).toEqual(user);
    });
});

describe('createUser', () => {
    it('should create user and return the user object', async () => {
        const user = { name: 'John', email: 'john@example.com', password: 'password123' };
        const salt = 'salty';
        const hash = 'hashed';
        authModel.genPassword = jest.fn().mockReturnValue({ salt, hash });
        const createdUser = { id: 1, ...user, password: hash, passwordSalt: salt };
        connection.execute.mockResolvedValue([[{ insertId: 1 }]]);
        connection.execute.mockResolvedValue([[createdUser]]);
        const result = await createUser(user);
        expect(result).toEqual(createdUser);
    });
});

describe('deleteUser', () => {
    it('should remove user by id', async () => {
        const id = 1;
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await deleteUser(id);
        expect(result).toEqual({ affectedRows: 1 });
    });
});

describe('updateUser', () => {
    it('should update user by id', async () => {
        const id = 1;
        const user = { name: 'John' };
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await updateUser(id, user);
        expect(result).toEqual({ affectedRows: 1 });
    });
});

describe('updateSaldo', () => {
    it('should update saldo by user id', async () => {
        const id = 1;
        const body = { saldo: 100 };
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await updateSaldo(id, body);
        expect(result).toEqual({ affectedRows: 1 });
    });
});

describe('updateFormulario', () => {
    it('should update formulario by user id', async () => {
        const id = 1;
        const formulario = { salario: 5000, objetivo: 'comprar casa' };
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await updateFormulario(id, formulario);
        expect(result).toEqual({ affectedRows: 1 });
    });
});

describe('updateMeta', () => {
    it('should update meta by user id', async () => {
        const id = 1;
        const body = { meta: 1000 };
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await updateMeta(id, body);
        
        expect(result).toEqual({ affectedRows: 1 });
    });
});
        
        
describe('getUserByID', () => {
    it('should return user by id', async () => {
        const user = { id: 1, name: 'John', email: 'john@example.com' };
        const id = 1;
        connection.execute.mockResolvedValue([[user]]);
        const result = await getUserByID(id);
        expect(result).toEqual(user);
    });
});

describe('updateSenha', () => {
    it('should update user password by id', async () => {
        const id = 1;
        const password = 'newpassword123';
        const salt = 'salty';
        const hash = 'hashed';
        authModel.genPassword = jest.fn().mockReturnValue({ salt, hash });
        connection.execute.mockResolvedValue([{ affectedRows: 1 }]);
        const result = await updateSenha(id, password);
        expect(result).toEqual({ affectedRows: 1 });
    });
});
        
// test if the mocks are working
describe('mocks', () => {
    it('should mock connection.execute', async () => {
        connection.execute.mockResolvedValue([[{ id: 1 }]]);
        const result = await connection.execute();
        expect(result).toEqual([[{ id: 1 }]]);
    });
    it('should mock authModel.genPassword', async () => {
        const salt = 'salty';
        const hash = 'hashed';
        authModel.genPassword = jest.fn().mockReturnValue({ salt, hash });
        const result = authModel.genPassword('password');
        expect(result).toEqual({ salt, hash });
    });
});