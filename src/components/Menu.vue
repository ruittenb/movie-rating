<script setup>
import StatsBar from '@/components/StatsBar.vue'

defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const emit = defineEmits([
  'add-movie',
  'sort-movies',
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

function sortMovies(mode) {
  closeMenu()
  emit('sort-movies', mode)
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
      <Transition name="unfold">
        <ul v-show="isOpen" class="bg-white m-0 p-1.5">
          <li @click="addMovie"><FontAwesomeIcon icon="circle-plus" class="plus" />Add Movie</li>
          <hr />
          <li @click="() => sortMovies('BY_ID')"><FontAwesomeIcon icon="arrow-down-1-9" class="sort" />Sort by ID</li>
          <li @click="() => sortMovies('BY_NAME')"><FontAwesomeIcon icon="arrow-down-a-z" class="sort" />Sort by Name</li>
          <li @click="() => sortMovies('BY_RATING')"><FontAwesomeIcon icon="arrow-down-wide-short" class="sort" />Sort by Rating</li>
          <hr />
          <li @click="resetRatings"><FontAwesomeIcon icon="backward-step" class="danger" />Reset all Ratings</li>
          <li @click="resetMovieData"><FontAwesomeIcon icon="backward-fast" class="danger" />Reset all Movie Data</li>
        </ul>
      </Transition>
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

hr {
  @apply border-gray-400 my-2;
}

ul {
  position: absolute;
  z-index: 30;
  width: 240px;
  top: 62px;
  right: 10px;
  overflow: hidden;
  border: 2px outset var(--tertiary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-color) 5px 5px 10px 10px;
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

.unfold-enter-active {
  transition: max-height 0.07s ease-out;
}
.unfold-leave-active {
  transition: max-height 0.07s ease-out;
}

.unfold-enter-to,
.unfold-leave-from {
  max-height: 300px;
}

.unfold-enter-from,
.unfold-leave-to {
  max-height: 0;
}
</style>
