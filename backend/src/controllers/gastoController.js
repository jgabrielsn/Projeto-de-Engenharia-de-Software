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

const getAllGastosByID = async (request, response) => {
    const { id } = request.params;
    const gasto = await gastoModel.getAllGastosByID(id);
    return response.status(200).json(gasto);
};

const getGastoByCodigo = async (request, response) => {
    const { codigo } = request.params;
    const gasto = await gastoModel.getGastoByCodigo(codigo);
    return response.status(200).json(gasto);
};

module.exports = {
    getAll,
    createGasto,
    deleteGasto,
    updateGasto,
    getAllGastosByID,
    getGastoByCodigo
};