<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import MainPage from '../pages/MainPage.vue'

const isAddMoviePopupOpen = ref(false)
const totalNrMovies = ref()
const averageRating = ref()
const resetRatings = ref(false)

function handleStats({ totalNrMovies: total, averageRating: rating }) {
  totalNrMovies.value = total
  averageRating.value = rating
}

function handleResetRatings() {
  resetRatings.value = true
}
function handleRatingsWereReset() {
  resetRatings.value = false
}

function openAddMoviePopup() {
  isAddMoviePopupOpen.value = true
}

function closeAddMoviePopup() {
  isAddMoviePopupOpen.value = false
}
</script>

<template>
  <div class="page">
    <Menu
      :average-rating="averageRating"
      :total-nr-movies="totalNrMovies"
      @open-add-movie="openAddMoviePopup"
      @reset-all-ratings="handleResetRatings"
    />
    <MainPage
      :is-add-movie-popup-open="isAddMoviePopupOpen"
      :is-rating-reset-requested="resetRatings"
      @close-add-movie="closeAddMoviePopup"
      @stats-updated="handleStats"
      @ratings-were-reset="handleRatingsWereReset"
    />
  </div>
</template>

<style scoped>
.page {
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
