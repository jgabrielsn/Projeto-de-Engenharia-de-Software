const gastoModel = require('../models/gastoModel');


const getAll = async (_request, response) => {
    const gasto = await gastoModel.getAll();
    return response.status(200).json(gasto);
};

const createGasto = async (request, response) => {
    const createdGasto = await gastoModel.createGasto(request.body);
    return response.status(201).json(createdGasto);
};

const deleteGasto = async (request, response) => {
    const { codigo } = request.params;
    await gastoModel.deleteGasto(codigo);
    return response.status(204).json();
};

const updateGasto = async (request, response) => {
    const { codigo } = request.params;
    await gastoModel.updateGasto(codigo, request.body);
    return response.status(204).json();

};

module.exports = {
    getAll,
    createGasto,
    deleteGasto,
    updateGasto
};