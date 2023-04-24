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
    
    next();
};

module.exports = {
    validateBody
};