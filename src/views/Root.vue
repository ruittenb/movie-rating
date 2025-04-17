<script setup>
import { computed, ref } from 'vue'
import MainPage from '../pages/MainPage.vue'
import Menu from '@/components/Menu.vue'
import MovieForm from '@/components/MovieForm.vue'
import Popup from '@/components/Popup.vue'

const movieBeingEdited = ref()

const isMovieFormOpen = ref(false)
const totalNrMovies = ref()
const averageRating = ref()
const resetRatings = ref(false)

const lastId = computed(() => Math.max(...movies.value.map((movie) => movie.id)))

function handleAddMovie() {
  movieBeingEdited.value = null
  openMovieForm()
}

function handleEditMovie(movieId) {
  movieBeingEdited.value = movies.value.find((movie) => movie.id === movieId)
  openMovieForm()
}

function handleRemoveMovie(movieId) {
  movies.value = movies.value.filter((movie) => movie.id !== movieId)
  writeData(movies.value)
}

function handleResetRatings() {
  resetRatings.value = true
}

function handleRatingsWereReset() {
  resetRatings.value = false
}

function handleStats({ totalNrMovies: total, averageRating: rating }) {
  totalNrMovies.value = total
  averageRating.value = rating
}

function handleUpdateMovie(movieData) {
  if (movieData.id) {
    movies.value = movies.value.map((oldMovie) => (oldMovie.id !== movieData.id ? oldMovie : newMovie))
  } else {
    movies.value.push({ id: lastId.value + 1, ...movie })
  }
  writeData(movies.value)
  closePopup()
}

function openMovieForm() {
  isMovieFormOpen.value = true
}

function closeMovieForm() {
  isMovieFormOpen.value = false
}
</script>

<template>
  <div class="page">
    <Menu
      :average-rating="averageRating"
      :total-nr-movies="totalNrMovies"
      @add-movie="handleAddMovie"
      @reset-all-ratings="handleResetRatings"
    />
    <MainPage
      :is-rating-reset-requested="resetRatings"
      @edit="handleEditMovie"
      @remove="handleRemoveMovie"
      @stats-updated="handleStats"
      @ratings-were-reset="handleRatingsWereReset"
    />
    <Popup v-if="isMovieFormOpen">
      <MovieForm
        :model-value="movieBeingEdited"
        @cancel="closeMovieForm"
        @update:model-value="handleUpdateMovie"
      />
    </Popup>
  </div>
</template>

<style scoped>
.page {
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
