const connection = require('../models/connection');


const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.contaNome == undefined) {
        return response.status(400).json({ message : 'O campo "Nome" é obrigatório'});
    }
    if (body.contaNome == '') {
        return response.status(400).json({ message : 'O campo "Nome" não pode ser vazio'});
    }
    if (body.valor == undefined) {
        return response.status(400).json({ message : 'O campo "Valor" é obrigatório'});
    }
    if (body.valor == '') {
        return response.status(400).json({ message : 'O campo "Valor" não pode ser vazio'});
    }

    next();
};


const validateCodigo = (request, response, next) => {
    const codigo = request.body.codigo || request.params.codigo;
    if (codigo == '') {
        return response.status(400).json({ message: 'O campo "codigo" é obrigatório'});
    }
    if (codigo == undefined) {
        return response.status(400).json({ message: 'O campo "codigo" está inválido'});
    }
    const idInt = parseInt(codigo);
    if (isNaN(idInt)) {
        return response.status(400).json({ message: 'The field "codigo" must be a valid integer'});
    }
    const query = `SELECT * FROM contas WHERE codigo = ${codigo}`;
    connection.execute(query)
        .then(([results]) => {
            if (results.length == 0) {
                return response.status(404).json({ message: 'Conta not found'});
            }
            next();
        })
        .catch((err) => {
            return response.status(500).json({ message: err.message });
        });
};

const verifyID = async (request, response, next) => {
    const UserID = request.body.UserID || request.params.id;
    if (!UserID) {
        return response.status(400).json({ message: 'The field "UserID" is required'});
    }
    const idInt = parseInt(UserID);
    if (isNaN(idInt)) {
        return response.status(400).json({ message: 'The field "UserID" must be a valid integer'});
    }
    const query = `SELECT * FROM users WHERE UserID = ${idInt}`;
    connection.execute(query)
        .then(([results]) => {
            if (results.length == 0) {
                return response.status(404).json({ message: 'User not found'});
            }
            next();
        })
        .catch((err) => {
            return response.status(500).json({ message: err.message });
        });
};



module.exports = {
    validateBody,
    validateCodigo,
    verifyID
};