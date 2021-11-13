const { perfis } = require('../data/db.js');

module.exports = {
    salario(usuario) {
        return usuario.salario_real;
    },
    isAdm() {
        return false;
    },
    perfil(usuario) {
        const selecionados = perfis
        .filter(perfil => perfil.id === usuario.perfil_id)
        return selecionados ? selecionados[0] : null;
    },
}