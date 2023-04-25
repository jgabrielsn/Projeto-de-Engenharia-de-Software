const contaModel = require('../models/contaModel');


const getAll = async (_request, response) => {
    const contas = await contaModel.getAll();
    return response.status(200).json(contas);
};

const createConta = async (request, response) => {
    let createdConta;
    try{
        createdConta = await contaModel.createConta(request.body);
    }
    catch(err){
        return response.status(400).json({message: err.message});
    }
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

const getAllContasByID = async (request, response) => {
    const { id } = request.params;
    const conta = await contaModel.getAllContasByID(id);
    return response.status(200).json(conta);
};

const getContaByCodigo = async (request, response) => {
    const { codigo } = request.params;
    const conta = await contaModel.getContaByCodigo(codigo);
    return response.status(200).json(conta);
};

module.exports = {
    getAll,
    createConta,
    deleteConta,
    updateConta,
    getAllContasByID,
    getContaByCodigo
};