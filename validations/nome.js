const { usuarios } = require('../data/db.js')

function Nome (args) {
    const nomeExistente = usuarios.some(users => users.nome === args.nome);

    if(nomeExistente) {
        throw new Error('Perfil já cadastrado');
    }
}

module.exports = { Nome }