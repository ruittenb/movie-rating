<script setup>
import Rating from './Rating.vue'
import Genres from './Genres.vue'

defineProps({
  movie: Object
})

const emit = defineEmits(['vote'])

function vote(id, num) {
  emit('vote', id, num)
}
</script>

<template>
  <div class="inline-block bg-white text-gray-800 mb-4 movie">
    <div class="vertical-spreader flex flex-col justify-between">
      <div>
        <img :alt="movie.name" :src="movie.image" class="poster" />
        <h1>{{ movie.name }}</h1>
        <div class="my-3"><Genres :names="movie.genres" /></div>
        <p class="my-3">{{ movie.description }}</p>
      </div>
      <div class="my-3"><Rating :rating="movie.rating" @vote="(num) => vote(movie.id, num)" /></div>
    </div>
  </div>
</template>

<style scoped>
.movie {
  --width: 400px;
  --margin: 10px;
  --poster-height: calc(1.5 * var(--width));
  --box-height: calc(2.17 * var(--width));

  position: relative;
  width: var(--width);
  height: var(--box-height);
  padding-left: var(--margin);
  padding-right: var(--margin);
}
.vertical-spreader {
  height: 100%;
}
.poster {
  position: absolute;
  width: var(--width);
  height: var(--poster-height);
  left: 0;
}
h1 {
  font-size: 28px;
  margin-top: calc(10px + var(--poster-height));
}
</style>
