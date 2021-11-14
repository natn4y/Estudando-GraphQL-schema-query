let id = 1;
function proximoId() {
    return id++
}

const perfis = [
    { id: 1, nivel: 'usuario' },
    { id: 2, nivel: 'administrador'},
];

const say = [
    {
        ola: 'Hello',
    },
];

const usuarios = [{
    id: proximoId(),
    nome: 'Daryl Warn',
    email: 'DarylWarn@gmail.com',
    idade: 27,
    perfil_id: 1,
    status: 'ATIVO',
}, {
    id: proximoId(),
    nome: 'Sarah Warn',
    email: 'SarahWarn@gmail.com',
    idade: 23,
    perfil_id: 2,
    status: 'INATIVO',
    salario_real: 1999.99
}, {
    id: proximoId(),
    nome: 'Vanessa Warn',
    email: 'VanessaWarn@gmail.com',
    idade: 26,
    perfil_id: 1,
    status: 'BLOQUEADO',
}];

module.exports = {
    usuarios,
    say,
    proximoId,
    perfis,
}