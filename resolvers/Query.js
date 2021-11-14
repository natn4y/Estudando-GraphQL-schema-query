const { usuarios, say, perfis } = require('../data/db.js');

function indiceUsuario (filtro) {
    if(!filtro) return -1
    const { id, email } = filtro;
    if(id) {
        return usuarios.findIndex(u => u.id === id);
    } else if(email) {
        return usuarios.findIndex(u => u.email === email);
    }
    return -1;
}

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
    usuario(_, { filtro }) {
        /* const selecionados = usuarios
            .filter(usuario => usuario.id === args.id) */
            const i = indiceUsuario(filtro);
            if(i < 0) return null
        //return selecionados ? selecionados[0] : null;
        return usuarios[i]
    },
    perfis() {
        return perfis;
    },
    say() {
        return say;
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null
    },
}