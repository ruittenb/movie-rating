<script setup>
import { ref } from 'vue'
import ButtonElement from './ButtonElement.vue'
import DigitStar from './DigitStar.vue'
import Genres from './Genres.vue'
import MovieForm from './MovieForm.vue'
import Popup from './Popup.vue'
import Rating from './Rating.vue'

defineProps({
  movie: Object
})

const emit = defineEmits(['update-movie', 'vote'])

const isEditPopupVisible = ref(false)

function updateMovie(movieData) {
  emit('update-movie', movieData)
  isEditPopupVisible.value = false
}

function handleEdit() {
  isEditPopupVisible.value = true
}

function closePopup() {
  isEditPopupVisible.value = false
}

function vote(id, rating) {
  emit('vote', id, rating)
}
</script>

<template>
  <div class="movie-panel inline-block bg-white text-gray-800 mb-4">
    <div class="vertical-spreader grid">
      <img :alt="movie.name" :src="movie.image" class="poster" />
      <DigitStar :rating="movie.rating" />
      <div class="top-left-overlay">
        <ButtonElement class="w-9" @click="handleEdit"><FontAwesomeIcon icon="pencil" /></ButtonElement>
        <ButtonElement danger class="w-9"><FontAwesomeIcon icon="trash-can" /></ButtonElement>
      </div>
      <h1>{{ movie.name }}</h1>
      <div class="mt-2 mb-3">
        <Genres :names="movie.genres" />
      </div>
      <p class="h-[80px] text-xs overflow-y-auto">{{ movie.description }}</p>
      <Rating :rating="movie.rating" class="w-full" @vote="(rating) => vote(movie.id, rating)" />
    </div>
  </div>
  <Popup v-if="isEditPopupVisible">
    <MovieForm :movie="movie" @close="closePopup" @update="updateMovie" />
  </Popup>
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

.vertical-spreader {
  height: 99%;
  overflow: hidden;
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
