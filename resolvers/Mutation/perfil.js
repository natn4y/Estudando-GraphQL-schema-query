const { perfis, proximoId } = require('../../data/db.js')
const validate = require("../../validations/nivel.js");

function indicePerfil(filtro) {
    if (!filtro) return -1
    const { id, nivel } = filtro;
    if (id) {
        return perfis.findIndex(p => p.id === id);
    } else if (nivel) {
        return perfis.findIndex(p => p.nivel === nivel)
    }
    return -1;
}

module.exports = {
    novoPerfil(_, { dados }) {
        validate.Nivel(dados);

        const novo = {
            id: proximoId(),
            ...dados,
        };
        perfis.push(novo);
        return novo;
    },
    excluirPerfil(_, { filtro }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const excluidos =
            perfis.splice(i, 1)
        return excluidos ?
            excluidos[0] : null
    },
    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro);
        if (i < 0) return null;

        const perfil = {
            ...perfis[i],
            ...dados
        };

        perfis.splice(i, 1, perfil);
        return perfil;
    }
}