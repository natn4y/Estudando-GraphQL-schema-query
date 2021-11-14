const { usuarios, proximoId } = require('../data/db.js')
const validate = require("../validations/email.js");

module.exports = {
    novoUsuario(_, args) {
        validate.Email(args);
        
        const novo = {
            id: proximoId(),
            ...args,
            perfil_id: 1,
            status: 'ATIVO'
        };

        usuarios.push(novo);
        return novo;
    }
}