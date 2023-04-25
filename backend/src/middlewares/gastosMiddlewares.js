const connection = require('../models/connection');

const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.gastoNome == undefined) {
        return response.status(400).json({ message : 'O campo "Nome" é obrigatório'});
    }
    if (body.gastoNome == '') {
        return response.status(400).json({ message : 'O campo "Nome" não pode estar vazio'});
    }
    if (body.valor == undefined) {
        return response.status(400).json({ message : 'O campo "Valor" é obrigatório'});
    }
    if (body.valor == '') {
        return response.status(400).json({ message : 'O campo "Valor" não pode estar vazio'});
    }
    if (body.data == undefined) {
        return response.status(400).json({ message : 'O campo "Data" é obrigatório'});
    }
    if (body.data == '') {
        return response.status(400).json({ message : 'O campo "Data" não pode estar vazio'});
    }
    if (body.categoria == undefined) {
        return response.status(400).json({ message : 'O campo "Categoria" é obrigatório'});
    }
    if (body.categoria == '') {
        return response.status(400).json({ message : 'O campo "Categoria" não pode estar vazio'});
    }
    if (body.UserID == undefined) {
        return response.status(400).json({ message : 'O campo "UserID" é obrigatório'});
    }
    if (body.UserID == '') {
        return response.status(400).json({ message : 'O campo "UserID" não pode estar vazio'});
    }
    
    next();
};

const validateCodigo = (req, res, next) => {
    const codigo = req.params.codigo || req.body.codigo;
    if (!codigo || codigo === '') {
        return res.status(400).json({ message: 'O campo "codigo" é obrigatório.' });
    }
    req.codigo = codigo;
    next();
};

const verifyID = async (request, response, next) => {
    const { UserID } = request.body || request.params;
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