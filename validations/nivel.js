const { perfis } = require('../data/db.js')

function Nivel(args) {
    const nivelExistente = perfis
    .some(u => u.nivel === args.nivel)

if(nivelExistente) {
    throw new Error('Nivel de perfil já cadastrado')
}
}

module.exports = { Nivel }