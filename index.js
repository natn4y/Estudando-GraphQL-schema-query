// Imports do ApolloServer e gql
const { ApolloServer, gql } = require('apollo-server');

// Schemas
const typeDefs = gql(
   ` # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaCerta: String
    }`
);

// resolvers
const resolvers = {
    Query: {
        // resolver para cada consulta:
        ola() {
            return 'Bom dia!'
        },
        horaCerta() {
            return `${new Date}`
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