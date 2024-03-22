<script setup>
import Movie from "@/components/Movie.vue"
import movies from '../movies.json'
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <Movie v-for="movie in movies.items" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
</style>
