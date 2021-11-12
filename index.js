// Imports do ApolloServer e gql
const { ApolloServer, gql } = require('apollo-server');

const usuarios = [{
    id: 1,
    nome: 'Daryl Warn',
    email: 'DarylWarn@gmail.com',
    idade: 27,
}, {
    id: 2,
    nome: 'Sarah Warn',
    email: 'SarahWarn@gmail.com',
    idade: 23,
}, {
    id: 3,
    nome: 'Vanessa Warn',
    email: 'VanessaWarn@gmail.com',
    idade: 26,
}]

// Schemas
const typeDefs = gql(
   `
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        isAdm: Boolean!
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
    }`
);

// resolvers
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        isAdm(usuario) {
            return false
        }
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
            return 'Bom dia!'
        },
        horaCerta() {
            return `${new Date}`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Daryl',
                email: 'daryl@gmail.com',
                idade: 27,
                salario_real: 1700.57,
                vip: true
            }
        },
        produtoEmDestaque() {
            return {
                nome: 'Guitar',
                preco: 1499.99,
                desconto: 0.25
            }
        },
        numerosMegaSena() {
            const crescente = (a, b) => a - b;
            return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
        },
        usuarios() {
            return usuarios
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})