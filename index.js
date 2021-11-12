// Imports do ApolloServer e gql
const { ApolloServer, gql } = require('apollo-server');

const perfis = [
    { id: 1, nivel: 'usuario' },
    { id: 2, nivel: 'administrador'},
]

const say = [
    {
        ola: 'Hello',
    },
]

const usuarios = [{
    id: 1,
    nome: 'Daryl Warn',
    email: 'DarylWarn@gmail.com',
    idade: 27,
    perfil_id: 1,
}, {
    id: 2,
    nome: 'Sarah Warn',
    email: 'SarahWarn@gmail.com',
    idade: 23,
    perfil_id: 2,
}, {
    id: 3,
    nome: 'Vanessa Warn',
    email: 'VanessaWarn@gmail.com',
    idade: 26,
    perfil_id: 1,
}]

// Schemas
const typeDefs = gql(
   `
    scalar Date

    type Say {
        ola: String
    }

    type Perfil {
        id: Int
        nivel: String
        say: Say
    }

    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        isAdm: Boolean!
        perfil: Perfil
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

   # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaCerta: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto

        #vai retornar obrigatoriamente um array que vai ter elementos obrigatoriamente do tipo Int
        numerosMegaSena: [Int!]!

        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
        say: [Say]
    }`
);

// resolvers
const resolvers = {

    Perfil: {
        say() {
            return say[0];
        }
    },
    Usuario: {
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
    },
    Produto: {
        precoComDesconto(parent) {
            if (parent.desconto) {
                return (parent.preco * (1 - parent.desconto)).toFixed(2);
            }
        }
    },

    Query: {
        // resolver para cada consulta:
        ola() {
            return 'Bom dia!';
        },
        horaCerta() {
            return `${new Date}`;
        },
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
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
},);