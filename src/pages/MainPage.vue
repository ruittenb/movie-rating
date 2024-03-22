<script setup>
import Movie from "@/components/Movie.vue"
import movies from '../movies.json'
</script>

<template>
  <div class="main-area">
    <Movie v-for="movie in movies.items" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.main-area {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
