const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.UserName == undefined) {
        return response.status(400).json({ message : 'The field "name" is required'});
    }
    if (body.UserName == '') {
        return response.status(400).json({ message : 'The field "name" cannot be empty'});
    }

    next();
};

module.exports = {
    validateBody
};