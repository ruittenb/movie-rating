<script setup>
import { ref } from 'vue'
import StatsBar from '@/components/StatsBar.vue'

defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const emit = defineEmits([
  'add-movie',
  'reset-all-ratings',
  'reset-all-movie-data'
])

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function addMovie() {
  closeMenu()
  emit('add-movie')
}

function resetRatings() {
  closeMenu()
  emit('reset-all-ratings')
}

function resetMovieData() {
  closeMenu()
  emit('reset-all-movie-data')
}
</script>

<template>
  <div class="menu">
    <StatsBar :average-rating="averageRating" :total-nr-movies="totalNrMovies" />
    <div v-click-outside="closeMenu">
      <FontAwesomeIcon icon="bars" class="hamburger" @click="toggleMenu" />
      <ul v-show="isOpen" class="bg-white m-0 p-1.5">
        <li @click="addMovie"><FontAwesomeIcon icon="circle-plus" class="plus" />Add Movie</li>
        <hr class="py-2" />
        <li @click="resetRatings"><FontAwesomeIcon icon="backward-step" class="danger" />Reset all Ratings</li>
        <li @click="resetMovieData"><FontAwesomeIcon icon="backward-fast" class="danger" />Reset all Movie Data</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px var(--body-margin-x);
  background-color: black;
  z-index: 100;
  border-bottom: 1px solid white;
}

.hamburger {
  font-size: 36px;
}

.plus {
  color: var(--add-color);
}

ul {
  position: absolute;
  z-index: 30;
  width: 240px;
  top: 62px;
  right: 10px;
}

li {
  @apply text-gray-500 px-3;
  height: 46px;
  line-height: 46px;
  list-style-type: none;
}

.danger {
  color: var(--danger-color);
}

li:hover {
  background-color: lightgray;
}

li svg {
  width: 20px;
  font-size: 24px;
  margin-right: 12px;
  margin-bottom: -3px;
}
</style>
