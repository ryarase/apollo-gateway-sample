import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import express from 'express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { PubSub } from 'graphql-subscriptions'
import { typeDefs } from './schema'
import resolvers from './resolvers'

const PORT = process.env.PORT || 4000
const pubsub = new PubSub()

// Create the schema, which will be used separately by ApolloServer and
// the WebSocket server.
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express()
const httpServer = createServer(app)

// Create our WebSocket server using the HTTP server we just set up.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
})
// Save the returned server's info so we can shutdown this server later
const serverCleanup = useServer({ schema }, wsServer)

// Set up ApolloServer.
const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose()
          },
        }
      },
    },
  ],
})

;(async () => {
  await server.start()
  server.applyMiddleware({ app })

  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(PORT, () => {
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`)
  })
})()

// In the background, increment a number every second and notify subscribers when
// it changes.
let currentNumber = 0
function incrementNumber() {
  currentNumber++
  pubsub.publish('NUMBER_INCREMENTED', { numberIncremented: currentNumber })
  setTimeout(incrementNumber, 1000)
}
// Start incrementing
incrementNumber()
