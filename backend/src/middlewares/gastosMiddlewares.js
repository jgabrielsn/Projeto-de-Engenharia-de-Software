const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.gastoNome == undefined) {
        return response.status(400).json({ message : 'O campo "Nome" é obrigatório'});
    }
    if (body.gastoNome == '') {
        return response.status(400).json({ message : 'O campo "Nome" não pode estar vazio'});
    }

    next();
};

module.exports = {
    validateBody
};