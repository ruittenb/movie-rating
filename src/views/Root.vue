<script setup>
import { computed } from "vue";
import MainPage from '../pages/MainPage.vue'
import Menu from '@/components/Menu.vue'
import { useMovies } from '@/composables/useMovies'

const Modal = defineAsyncComponent(() => import('@/components/Modal.vue'))
const MovieForm = defineAsyncComponent(() => import('@/components/MovieForm.vue'))

const {
  averageRating,
  getMovie,
  resetAllMovieData,
  resetRatings,
  sortMovies,
  totalNrMovies,
  updateMovie
} = useMovies()

const formMovie = ref()
const isMovieFormOpen = ref(false)
const formTitle = computed(() => formMovie.value ? 'Edit Movie' : 'Add Movie')

function handleResetRatings() {
  resetRatings()
}

function handleResetMovieData() {
  resetAllMovieData()
}

function handleAddMovie() {
  formMovie.value = null
  openMovieForm()
}

function handleSortMovies(mode) {
  sortMovies(mode)
}

function handleEditMovie(movieId) {
  formMovie.value = getMovie(movieId)
  openMovieForm()
}

function handleSubmit(movieData) {
  updateMovie(movieData)
  console.log(JSON.stringify(movieData))
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
      @sort-movies="handleSortMovies"
      @reset-all-ratings="handleResetRatings"
      @reset-all-movie-data="handleResetMovieData"
    />
    <MainPage
      @edit="handleEditMovie"
    />
    <Modal
        :show="isMovieFormOpen"
        :title="formTitle"
        @close="handleCancel"
    >
      <MovieForm
          :model-value="formMovie"
          @abort="handleCancel"
          @update:model-value="handleSubmit"
      />
    </Modal>
  </div>
</template>

<style scoped>
.page {
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
