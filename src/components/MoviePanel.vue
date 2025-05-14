<script setup>
import { computed } from 'vue'
import ButtonElement from './ButtonElement.vue'
import DigitStar from './DigitStar.vue'
import Genres from './Genres.vue'
import Rating from './Rating.vue'

const props = defineProps({
  movie: Object
})

const emit = defineEmits([
  'edit',
  'remove',
  'update:rating'
])

const isRated = computed(() =>
    props.movie.rating &&
    props.movie.rating !== Infinity &&
    props.movie.rating !== -Infinity
)

const movieUrl = computed(() => {
  return `https://www.imdb.com/title/${props.movie.imdb}`
})

function handleEdit(movieId) {
  emit('edit', movieId)
}

function handleRemove(movieId) {
  emit('remove', movieId)
}

function handleUpdateRating(id, rating) {
  emit('update:rating', id, rating)
}

function handleImgError(event) {
  event.target.style.display = 'none';
}
function handleImgLoad(event) {
  event.target.style.display = 'inline';
}
</script>

<template>
  <div class="movie-panel inline-block bg-white text-gray-800 mb-4">
    <div class="vertical-spreader grid">
      <div class="poster default-img">
        <img :alt="movie.name" :src="movie.image" class="poster" @error="handleImgError" @load="handleImgLoad"/>
      </div>
      <DigitStar :rating="movie.rating" />
      <div class="top-left-overlay">
        <ButtonElement class="w-9" @click="() => handleEdit(movie.id)">
          <FontAwesomeIcon icon="pencil" />
        </ButtonElement>
        <ButtonElement danger class="w-9" @click="() => handleRemove(movie.id)">
          <FontAwesomeIcon icon="trash-can" />
        </ButtonElement>
      </div>
      <h1 v-if="movie.imdb"><a :href="movieUrl" target="_blank">{{ movie.name }}</a></h1>
      <h1 v-else>{{ movie.name }}</h1>
      <div class="mt-2 mb-3">
        <Genres :names="movie.genres" />
      </div>
      <p class="h-[80px] text-xs overflow-y-auto">{{ movie.description }}</p>
      <Rating :rating="movie.rating" class="w-full" @vote="(rating) => handleUpdateRating(movie.id, rating)" />
    </div>
  </div>
</template>

<style scoped>
.movie-panel {
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

.top-left-overlay {
  @apply absolute left-3 top-3 mb-3 w-20 h-9 flex justify-between;
  color: black;
  visibility: hidden;
}
.movie-panel:hover .top-left-overlay {
  visibility: visible;
}

.poster {
  position: absolute;
  width: var(--width);
  height: var(--poster-height);
  left: 0;
}

.default-img {
  background-image: url("../assets/default-movie.png");
}

h1 {
  font-size: 22px;
  display: inline-block;
  height: 1.8rem;
  margin-top: calc(10px + var(--poster-height));
  white-space: nowrap;

  &:hover {
    background-color: var(--imdb-color);
    border-radius: var(--border-radius);
    border-width: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: #aaa underline;
  }
}

.vertical-spreader {
  height: 99%;
  overflow: hidden;
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
