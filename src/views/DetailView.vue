<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useMovies } from '@/composables/useMovies'
import DigitStar from "@/components/DigitStar.vue";
import Genres from '@/components/Genres.vue'
import ButtonElement from '@/components/ButtonElement.vue'

const route = useRoute()
const router = useRouter()
const { getMovie } = useMovies()

const movieData = ref({})

function handleBackButton() {
  router.push({ name: 'gridView' })
}

onMounted(() => {
  movieData.value = getMovie(Number(route.params.id))
})
</script>

<template>
  <div class="detail-page">
    <ButtonElement class="back-button" @click="handleBackButton">
      <FontAwesomeIcon icon="arrow-left" />
    </ButtonElement>
    <div class="movie-card">
      <div class="poster">
        <img :alt="movieData.name" :src="movieData.image"/>
        <DigitStar :rating="movieData.rating" />
      </div>
      <h1>{{ movieData.name }}</h1>
      <div class="genres">
        <Genres :names="movieData.genres" />
      </div>
      <div class="main-data">
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

.poster {
  grid-area: image;
  position: relative;

  & img {
    min-width: calc(var(--width) * 1.5);
    height: calc(var(--poster-height) * 1.5);
    object-fit: cover;
  }
}

h1 {
  grid-area: header;
  font-size: 48px;
}

.back-button {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 2rem;
}

.genres {
  grid-area: genres;
}

.main-data {
  grid-area: main;
  font-size: 18px;
}
</style>
