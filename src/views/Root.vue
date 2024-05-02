<script setup>
import { ref } from 'vue'
import Menu from '../components/Menu.vue'
import MainPage from '../pages/MainPage.vue'

const isAddMoviePopupOpen = ref(false)
const totalNrMovies = ref()
const averageRating = ref()

function handleStats({ totalNrMovies: total, averageRating: rating }) {
  totalNrMovies.value = total
  averageRating.value = rating
}

function resetRatings() {
  console.log('Resetting ratings...')
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
    <Menu :average-rating="averageRating" :total-nr-movies="totalNrMovies" @open-add-movie="openAddMoviePopup" @reset-all-ratings="resetRatings" />
    <MainPage :is-add-movie-popup-open="isAddMoviePopupOpen" @stats-updated="handleStats" @close-add-movie="closeAddMoviePopup" />
  </div>
</template>

<style scoped>
.page {
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
