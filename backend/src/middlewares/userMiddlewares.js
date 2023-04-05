const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.name == undefined) {
        return response.status(400).json({ message : 'The field "name" is required'});
    }
    if (body.name == '') {
        return response.status(400).json({ message : 'The field "name" cannot be empty'});
    }

    next();
};

module.exports = {
    validateBody
};