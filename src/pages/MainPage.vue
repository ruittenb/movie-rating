<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import Movie from "@/components/Movie.vue"
import { useStorage } from '@/composables/useStorage'
import movieData from '../movies.json'

const movies = ref([])
const sortedMovies = computed(() => [ ...movies.value].sort(byId))

const { readData, writeData } = useStorage()

function byId(a, b) {
  return a.id - b.id
}

function vote(id, rating) {
  const votedMovie = movies.value.find(movie => movie.id === id)
  if (!votedMovie) {
    return
  }
  votedMovie.rating = rating
  writeData(movies.value)
}

onBeforeMount(() => {
  movies.value = readData()
  if (movies.value === null) {
    movies.value = movieData.items
  }
})
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <Movie v-for="movie in sortedMovies" :key="movie.id" :movie="movie" @vote="(id, rating) => vote(id, rating)" />
  </div>
</template>

<style scoped>
</style>
