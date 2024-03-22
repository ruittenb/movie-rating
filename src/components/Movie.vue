<script setup>
import Rating from './Rating.vue'
import Genres from './Genres.vue'

defineProps({
  movie: Object
})
</script>

<template>
  <div class="inline-block bg-white text-gray-800 mr-4 mb-4 movie">
    <img :alt="movie.name" :src="movie.image" class="poster" />
    <h1>{{ movie.name }}</h1>
    <div class="my-1.5"><Genres :names="movie.genres" /></div>
    <p class="my-1.5">{{ movie.description }}</p>
    <div class="my-1.5"><Rating :rating="movie.rating" class="block" /></div>
  </div>
</template>

<style scoped>
.movie {
  --width: 350px;
  --margin: 10px;
  --poster-height: calc(1.5 * var(--width));

  position: relative;
  width: var(--width);
  height: calc(2.2 * var(--width));
  padding-left: var(--margin);
  padding-right: var(--margin);
}
.poster {
  position: absolute;
  width: var(--width);
  height: var(--poster-height);
  left: 0;
}
h1 {
  @apply my-1.5;
  font-size: 28px;
  margin-top: var(--poster-height);
}
</style>
