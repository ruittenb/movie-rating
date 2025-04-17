<script setup>
import { computed, ref, watch, onBeforeMount } from 'vue'
import { useStorage } from '@/composables/useStorage'
import MovieItem from '@/components/MovieItem.vue'
import MovieTable from '@/components/MovieTable.vue'

import movieData from '../movies.json'

const props = defineProps({
  movieBeingEdited: Object,
  isRatingResetRequested: Boolean
})

const emit = defineEmits([
  'edit',
  'remove',
  'ratings-were-reset',
  'stats-updated'
])

const { readData, writeData } = useStorage()

const movies = ref([])
const sortedMovies = computed(() => [...movies.value].sort(byId))
const totalNrMovies = computed(() => movies.value.length)
// averateRating: we may be dividing by zero here, but we will allow it and detect it later
const averageRating = computed(() => movies.value.map((movie) => movie.rating).reduce((a, b) => a + b, 0) / totalNrMovies.value)

function byId(a, b) {
  return Math.sign(a.id - b.id)
}

function resetRatings() {
  movies.value = movies.value.map((movie) => ({ ...movie, rating: null }))
}

function handleEditMovie(movieId) {
  emit('edit', movieId)
}

function handleRemoveMovie(movieId) {
  emit('remove', movieId)
}

function handleUpdateRating(movieId, rating) {
  const votedMovie = movies.value.find((movie) => movie.id === movieId)
  if (!votedMovie) {
    return
  }
  votedMovie.rating = rating
  writeData(movies.value)
}

watch(
  [totalNrMovies, averageRating],
  () => {
    emit('stats-updated', { totalNrMovies: totalNrMovies.value, averageRating: averageRating.value })
  },
  { immediate: true }
)

watch(
  () => props.isRatingResetRequested,
  (newValue) => {
    if (newValue) {
      resetRatings()
      emit('ratings-were-reset')
    }
  }
)

onBeforeMount(() => {
  movies.value = readData()
  if (movies.value === null) {
    movies.value = movieData.items
  }
})
</script>

<template>
  <div class="main-area px-6 py-5 mt-16 flex flex-row flex-wrap gap-5">
    <MovieItem
      v-for="movie in sortedMovies"
      :key="movie.id"
      :movie="movie"
      @edit="handleEditMovie"
      @remove="handleRemoveMovie"
      @update:rating="(id, rating) => handleUpdateRating(id, rating)"
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
