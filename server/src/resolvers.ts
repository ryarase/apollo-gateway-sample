import axios from 'axios'

const resolvers = {
  Query: {
    // pokemons: (_, __, { dataSources }) =>
    //   dataSources.pokeomonAPI.getPokemons(),
    // pokemon: (_, id, { dataSources }) =>
    //   dataSources.pokeomonAPI.getPokemon(id),
    pokemons: async () => {
      const response = await axios({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
        method: 'get',
      })
      const data = response.data

      return Array.isArray(data.results)
        ? data.results
        : []
    },

    pokemon: async (parent: any, args: any, context: any, info: any) => {
      console.log(args.id)
      const response = await axios({
        url: `https://pokeapi.co/api/v2/pokemon/${args.id}`,
        method: 'get',
      })
      const data = response.data

      return data
    },
  }
}

export default resolvers
