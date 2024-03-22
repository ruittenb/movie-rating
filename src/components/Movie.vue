<script setup>
import Rating from './Rating.vue'
import Genres from './Genre.vue'

defineProps({
  movie: Object
})
</script>

<template>
  <div class="inline-block bg-white text-gray-800 mr-4 mb-4 movie">
    <Rating :rating="2"></Rating>
    <Genres :names="['Adventure', 'Drama']"></Genres>
  </div>
</template>

<style scoped>
.movie {
  --width: 350px;
  width: var(--width);
  height: calc(1.8 * var(--width));
}
</style>
