<script setup>
import { ref, onBeforeMount } from 'vue'
import Movie from "@/components/Movie.vue"
import { useStorage } from '@/composables/useStorage'
import movieData from '../movies.json'

const movies = ref([])

const { readData, writeData } = useStorage()

function vote(id, rating) {
  const votedMovie = movies.value.find(movie => movie.id === id)
  if (!votedMovie) {
    return
  }
  votedMovie.rating = rating
  writeData(movies.value)
}

onBeforeMount(() => {
  try {
    movies.value = readData()
  } catch (error) {
    movies.value = movieData.items
  }
})
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" @vote="(id, rating) => vote(id, rating)" />
  </div>
</template>

<style scoped>
</style>
