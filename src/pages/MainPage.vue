<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'
import MoviePanel from '@/components/MoviePanel.vue'
import Popup from '@/components/Popup.vue'
import MovieForm from '@/components/MovieForm.vue'
import MovieTable from '@/components/MovieTable.vue'
import movieData from '../movies.json'

const props = defineProps({
  isAddMoviePopupOpen: Boolean,
  isRatingResetRequested: Boolean
})

const emit = defineEmits(['close-add-movie', 'ratings-were-reset', 'stats-updated'])

const { readData, writeData } = useStorage()

const movies = ref([])
const movieDataTemplate = { genres: [] }
const sortedMovies = computed(() => [...movies.value].sort(byId))
const totalNrMovies = computed(() => movies.value.length)
const averageRating = computed(() => movies.value.map((movie) => movie.rating).reduce((a, b) => a + b, 0) / totalNrMovies.value)
const lastId = computed(() => Math.max(...movies.value.map((movie) => movie.id)))

function byId(a, b) {
  return a.id - b.id
}

function resetRatings() {
  movies.value = movies.value.map((movie) => ({ ...movie, rating: null }))
}

function vote(id, rating) {
  const votedMovie = movies.value.find((movie) => movie.id === id)
  if (!votedMovie) {
    return
  }
  votedMovie.rating = rating
  writeData(movies.value)
}

function closePopup() {
  emit('close-add-movie')
}

function addMovie(movie) {
  movies.value.push({ id: lastId.value + 1, ...movie })
  writeData(movies.value)
  closePopup()
}

function deleteMovie(movieData) {
  movies.value = movies.value.filter((movie) => movie.id !== movieData.id)
  writeData(movies.value)
}

function updateMovie(newMovie) {
  movies.value = movies.value.map((oldMovie) => (oldMovie.id !== newMovie.id ? oldMovie : newMovie))
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
  () => props.modelValue,
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
    <MoviePanel
      v-for="movie in sortedMovies"
      :key="movie.id"
      :movie="movie"
      @delete-movie="deleteMovie"
      @update-movie="updateMovie"
      @vote="(id, rating) => vote(id, rating)"
    />
  </div>
  <div>
    <MovieTable :movies="movies" />
  </div>
  <Popup v-if="isAddMoviePopupOpen">
    <MovieForm :create="true" :movie="movieDataTemplate" @close="closePopup" @add="addMovie" />
  </Popup>
</template>

<style scoped>
.main-area {
  padding-left: var(--body-margin-x);
  padding-right: var(--body-margin-x);
}
</style>
