<template>
  <h1>Pokemon - view</h1>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <figure>
      <img :src="pokemon.sprites.front_default">
    </figure>

    <p>
      <b>{{ pokemon.name }}</b>
    </p>
    <table>
      <tr>
        <td>No.</td>
        <td>{{ pokemon.id }}</td>
      </tr>
      <tr>
        <td>タイプ</td>
        <td>
          <div v-for="typedata in pokemon.types">{{ typedata.type.name }}</div>
        </td>
      </tr>
      <tr>
        <td>高さ</td>
        <td>{{ pokemon.height }}</td>
      </tr>
      <tr>
        <td>重さ</td>
        <td>{{ pokemon.weight }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable'
import { GET_POKEMON } from '~/api/queries'

definePageMeta({
  name: 'PokemonViewPage',
})

const route = useRoute()

const variables = ref({
  id: route.params.id,
})
const { loading, result } = useQuery(
  GET_POKEMON,
  variables,
)

const pokemon = computed(() => {
  return result.value?.pokemon
})
</script>
