const User = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('Firstname, email, and password are required');
    }

    const user = new User({
        fullname: {
            firstname,
            lastname: lastname || ''
        },
        email,
        password
    });
    return user;
}
