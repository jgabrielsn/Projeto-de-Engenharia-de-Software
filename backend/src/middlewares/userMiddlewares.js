const validateBody = (request, response, next) => {
    const { body } = request;

    // BODY
    if (body == undefined) {
        return response.status(400).json({ message : 'Body is required'});
    }
    if (body == '') {
        return response.status(400).json({ message : 'Body cannot be empty'});
    }
    next();
};

const validateName = (request, response, next) => {
    const { body } = request;
    //NAME
    if (body.UserName == undefined) {
        return response.status(400).json({ message : 'The field "name" is required'});
    }
    if (body.UserName == '') {
        return response.status(400).json({ message : 'The field "name" cannot be empty'});
    }
    next();
};

const validateEmail = (request, response, next) => {
    const { body } = request;
    // EMAIL
    if (body.Email == undefined) {
        return response.status(400).json({ message : 'The field "email" is required'});
    }
    if (body.Email == '') {
        return response.status(400).json({ message : 'The field "email" cannot be empty'});
    }
    if (body.Email.indexOf('@') == -1) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('.') == -1) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('@') > body.Email.indexOf('.')) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('@') == 0) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('.') == 0) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('@') == body.Email.length - 1) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    }
    if (body.Email.indexOf('.') == body.Email.length - 1) {
        return response.status(400).json({ message : 'The field "email" must be a valid email'});
    } 
    next();
};
const validatePassword = (request, response, next) => {  
    const { body } = request;
    // PASSWORD	
    if (body.Password == undefined) {
        return response.status(400).json({ message : 'The field "password" is required'});
    }
    if (body.Password == '') {
        return response.status(400).json({ message : 'The field "password" cannot be empty'});
    }
    next();
};

module.exports = {
    validateBody,
    validateName,
    validateEmail,
    validatePassword
};