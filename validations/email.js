const { usuarios } = require('../data/db.js')

function Email (args) {
    const emailExistente = usuarios.some(users => users.email === args.email);

    if(emailExistente) {
        throw new Error('E-mail de usuário já cadastrado');
    }
}

module.exports = { Email }