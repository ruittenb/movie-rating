<script setup>
import MainPage from '../pages/MainPage.vue'
import Menu from '@/components/Menu.vue'
import MovieForm from '@/components/MovieForm.vue'
import Popup from '@/components/Popup.vue'
import { useMovies } from '@/composables/useMovies'

const { averageRating, getMovie, resetRatings, totalNrMovies, updateMovie } = useMovies()

const formMovie = ref()
const isMovieFormOpen = ref(false)

function handleResetRatings() {
  resetRatings()
}

function handleResetMovieData() {
  console.log('resetting all movie data') // TODO
}

function handleAddMovie() {
  formMovie.value = null
  openMovieForm()
}

function handleEditMovie(movieId) {
  formMovie.value = getMovie(movieId)
  openMovieForm()
}

function handleSubmit(movieData) {
  updateMovie(movieData)
  closeMovieForm()
}

function handleCancel() {
  closeMovieForm()
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
      @reset-all-movie-data="handleResetMovieData"
    />
    <MainPage
      @edit="handleEditMovie"
    />
    <Popup v-if="isMovieFormOpen">
      <MovieForm
        :model-value="formMovie"
        @cancel="handleCancel"
        @update:model-value="handleSubmit"
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
