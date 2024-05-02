<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'
import MoviePanel from '@/components/MoviePanel.vue'
import Popup from '@/components/Popup.vue'
import MovieForm from '@/components/MovieForm.vue'
import MovieTable from '@/components/MovieTable.vue'
import movieData from '../movies.json'

const props = defineProps({
  isAddMoviePopupOpen: Boolean
})

const emit = defineEmits(['close-add-movie', 'stats-updated'])

const { readData, writeData } = useStorage()

const movies = ref([])
const sortedMovies = computed(() => [...movies.value].sort(byId))
const totalNrMovies = computed(() => movies.value.length)
const averageRating = computed(() => movies.value.map((movie) => movie.rating).reduce((a, b) => a + b, 0) / totalNrMovies.value)
const lastId = computed(() => Math.max(...movies.value.map((movie) => movie.id)))

function byId(a, b) {
  return a.id - b.id
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

watch(
  [totalNrMovies, averageRating],
  () => {
    emit('stats-updated', { totalNrMovies: totalNrMovies.value, averageRating: averageRating.value })
  },
  { immediate: true }
)

onBeforeMount(() => {
  movies.value = readData()
  if (movies.value === null) {
    movies.value = movieData.items
  }
})
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <MoviePanel v-for="movie in sortedMovies" :key="movie.id" :movie="movie" @vote="(id, rating) => vote(id, rating)" />
  </div>
  <div>
    <MovieTable :movies="movies" />
  </div>
  <Popup v-if="isAddMoviePopupOpen">
    <MovieForm :movie="{}" @close-add-movie="closePopup" @add-movie="addMovie" />
  </Popup>
</template>

<style scoped>
.main-area {
  padding-left: var(--body-margin-x);
  padding-right: var(--body-margin-x);
}
</style>
