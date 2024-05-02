<script setup>
import DigitStar from './DigitStar.vue'
import Genres from './Genres.vue'
import Rating from './Rating.vue'

defineProps({
  movie: Object
})

const emit = defineEmits(['vote'])

function vote(id, rating) {
  emit('vote', id, rating)
}
</script>

<template>
  <div class="inline-block bg-white text-gray-800 mb-4 movie">
    <div class="vertical-spreader flex flex-col justify-between">
      <div>
        <img :alt="movie.name" :src="movie.image" class="poster" />
        <DigitStar :rating="movie.rating" />
        <h1>{{ movie.name }}</h1>
        <div class="mt-2 mb-3">
          <Genres :names="movie.genres" />
        </div>
        <p class="h-[80px] text-xs overflow-y-auto">{{ movie.description }}</p>
      </div>
      <div>
        <Rating :rating="movie.rating" @vote="(rating) => vote(movie.id, rating)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie {
  --width: 300px;
  --margin: 10px;
  --poster-height: calc(1.5 * var(--width));
  --box-height: calc(2.19 * var(--width));

  position: relative;
  width: var(--width);
  height: var(--box-height);
  padding-left: var(--margin);
  padding-right: var(--margin);
}

.vertical-spreader {
  height: 98%;
  overflow: hidden;
}

.poster {
  position: absolute;
  width: var(--width);
  height: var(--poster-height);
  left: 0;
}

h1 {
  font-size: 22px;
  display: inline-block;
  height: 1.8rem;
  margin-top: calc(10px + var(--poster-height));
  white-space: nowrap;
}

.movie:hover {
  overflow: visible;
}

.vertical-spreader:hover {
  overflow: visible;
}

.vertical-spreader div:hover {
  overflow: visible;
}

.vertical-spreader div:hover h1 {
  background-color: white;
}
</style>
