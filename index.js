// Imports do ApolloServer e gql
const { ApolloServer, gql } = require('apollo-server');

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