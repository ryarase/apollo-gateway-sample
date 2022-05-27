import { gql } from "@apollo/client/core"

export const GET_POKEMONS = gql`
query GetPokemons {
  pokemons {
    name
    url
  }
}
`

export const GET_POKEMON = gql`
query GetPokemon($id: String!) {
  pokemon(id: $id) {
    id
    name
    height
    weight
    sprites {
      front_default
    }
  }
}
`