<script setup>
import { computed } from 'vue'
import { useMovies } from '@/composables/useMovies'
import MovieItem from '@/components/MovieItem.vue'
import MovieTable from '@/components/MovieTable.vue'

const emit = defineEmits([
  'edit',
])

const { movies, rateMovie, removeMovie } = useMovies()

function handleEditMovie(movieId) {
  emit('edit', movieId)
}

function handleRemoveMovie(movieId) {
  removeMovie(movieId)
}

function handleUpdateRating(movieId, rating) {
  rateMovie(movieId, rating)
}
</script>

<template>
  <div class="main-area px-6 py-5 mt-16 flex flex-row flex-wrap gap-5">
    <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @edit="handleEditMovie"
      @remove="handleRemoveMovie"
      @update:rating="handleUpdateRating"
    />
  </div>
  <div>
    <MovieTable :movies="movies" />
  </div>
</template>

<style scoped>
.main-area {
  padding-left: var(--body-margin-x);
  padding-right: var(--body-margin-x);
}
</style>
