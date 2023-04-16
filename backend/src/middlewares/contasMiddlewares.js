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

module.exports = {
    validateBody
};