import { RESTDataSource } from 'apollo-datasource-rest'

export default class PokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemons() {
    const response = await this.get('pokemon/?limit=151')
    return Array.isArray(response.results)
      ? response.results
      : []
  }

  async getPokemon(id: string) {
    const response = await this.get(`pokemon/${ id }`)
    return response
  }
}
