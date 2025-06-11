<script setup>
import { useRoute } from 'vue-router'
import { useMovies } from '@/composables/useMovies'
import Genres from '../components/Genres.vue'

const route = useRoute()
const { getMovie } = useMovies()

const movieData = ref({})

onMounted(() => {
  movieData.value = getMovie(Number(route.params.id))
})
</script>

<template>
  <div class="detail-page">
    <div class="movie-card">
      <img :src="movieData.image" class="poster" />
      <h1>{{ movieData.name }}</h1>
      <div class="genres">
        <Genres :names="movieData.genres" />
      </div>
      <div class="movie-data">
        {{ movieData.description }}
        <br>
        <!--ImdbLink :id="movieData.imdb">On IMDB</ImdbLink-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
}

.movie-card {
  width: 60vw;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "image header"
    "image genres"
    "image main";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  align-items: start;
}

h1 {
  font-size: 48px;
  grid-area: header;
  row-span: 2;
}

.poster {
  min-width: calc(var(--width) * 1.5);
  height: calc(var(--poster-height) * 1.5);
  grid-area: image;
  object-fit: cover;
}

.genres {
  grid-area: genres;
}

.movie-data {
  grid-area: main;
  font-size: 18px;
}
</style>
