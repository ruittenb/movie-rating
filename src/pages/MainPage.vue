<script setup>
import { ref } from 'vue'
import Movie from "@/components/Movie.vue"
import movieData from '../movies.json'

const movies = ref(movieData.items)

function vote(id, num) {
  const votedMovie = movies.value.find(movie => movie.id === id)
  if (!votedMovie) {
    return
  }
  votedMovie.rating = num
}
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" @vote="(id, num) => vote(id, num)" />
  </div>
</template>

<style scoped>
</style>
