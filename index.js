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

   # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaCerta: Date!
        usuarioLogado: Usuario
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