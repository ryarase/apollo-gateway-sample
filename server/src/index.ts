// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
// import { loadSchemaSync } from '@graphql-tools/load'
// import { addResolversToSchema } from '@graphql-tools/schema'
// import { join } from 'path'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import PokemonAPI from './datasources/pokemon'
import resolvers from './resolvers'

// const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
//   loaders: [new GraphQLFileLoader()],
// })

// const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // dataSources: () => ({
  //   pokemonAPI: new PokemonAPI(),
  // }),
  // cors: {
  //   origin: [
  //     'http://localhost:3000',
  //   ],
  //   credentials: true,
  // },
})

// The `listen` method launches a web server.
const PORT = process.env.PORT || 4000
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
