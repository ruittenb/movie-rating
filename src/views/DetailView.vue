<script setup>
import { useRoute } from 'vue-router'
import { useMovies } from '@/composables/useMovies'

const route = useRoute()
const { getMovie, movies } = useMovies()

const movieData = ref({})

onMounted(() => {
  movieData.value = getMovie(Number(route.params.id))
})
</script>

<template>
  <div class="detail-page">
    <div class="movie-card">
      <h1>{{ movieData.name }}</h1>
      <div>
        <img :src="movieData.image" class="poster" />
      </div>
      <div>
        {{ JSON.stringify(movieData) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100vw;
  height: 100vh;
  color: white;
}

.movie-card {
  width: 60vw;
}

h1 {
  font-size: 48px;
}

.poster {
  width: var(--width);
  height: var(--poster-height);
}
</style>
