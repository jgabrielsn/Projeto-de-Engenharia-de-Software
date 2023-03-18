const getAll = (request, response) => {
    return response.status(200).json({message: 'controller funcionando'});
};

module.exports = {
    getAll
};