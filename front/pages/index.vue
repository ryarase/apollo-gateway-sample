<template>
  <h1>Pokemon - index</h1>
  <div v-if="loading">Loading...</div>
  <ul v-else>
    <li v-for="pokemon in pokemons">
      <a :href="`${ pokemon.url.replace('https://pokeapi.co/api/v2', '').slice(0, -1) }`">
        <i>{{ pokemon.name }}</i>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable'
import { GET_POKEMONS } from '~/api/queries'

definePageMeta({
  name: 'IndexPage',
})

const { loading, result } = useQuery(GET_POKEMONS)
const pokemons = computed(() => {
  return result.value?.pokemons || []
})
</script>
