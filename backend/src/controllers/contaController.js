const contaModel = require('../models/contaModel');


const getAll = async (_request, response) => {
    const contas = await contaModel.getAll();
    return response.status(200).json(contas);
};

const createConta = async (request, response) => {
    const createdConta = await contaModel.createConta(request.body);
    return response.status(201).json(createdConta);
};

const deleteConta = async (request, response) => {
    const { codigo } = request.params;
    await contaModel.deleteConta(codigo);
    return response.status(204).json();
};

const updateConta = async (request, response) => {
    const { codigo } = request.params;
    await contaModel.updateConta(codigo, request.body);
    return response.status(204).json();

};

const getContaByID = async (request, response) => {
    const { id } = request.params;
    const conta = await contaModel.getContaByID(id);
    return response.status(200).json(conta);
};

module.exports = {
    getAll,
    createConta,
    deleteConta,
    updateConta,
    getContaByID
};