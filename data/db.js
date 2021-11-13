
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
    id: 1,
    nome: 'Daryl Warn',
    email: 'DarylWarn@gmail.com',
    idade: 27,
    perfil_id: 1,
    status: 'ATIVO',
}, {
    id: 2,
    nome: 'Sarah Warn',
    email: 'SarahWarn@gmail.com',
    idade: 23,
    perfil_id: 2,
    status: 'INATIVO',
}, {
    id: 3,
    nome: 'Vanessa Warn',
    email: 'VanessaWarn@gmail.com',
    idade: 26,
    perfil_id: 1,
    status: 'BLOQUEADO',
}];

module.exports = { usuarios, say, perfis }