const { usuarios, say, perfis } = require('../data/db.js');

module.exports = {

    usuarioLogado() {
        return {
            id: 1,
            nome: 'Daryl',
            email: 'daryl@gmail.com',
            idade: 27,
            salario_real: 1700.57,
            vip: true
        };
    },
    produtoEmDestaque() {
        return {
            nome: 'Guitar',
            preco: 1499.99,
            desconto: 0.25
        };
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b;
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente);
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, args) {
        const selecionados = usuarios
            .filter(usuario => usuario.id === args.id)
        return selecionados ? selecionados[0] : null;
    },
    perfis() {
        return perfis;
    },
    say() {
        return say;
    },
    perfil(_, args) {
        const selecionados = usuarios
            .filter(perfil => perfil.id === args.id)
        return selecionados ? selecionados[0] : null;
    },
}