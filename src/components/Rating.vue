<script setup>
import StarIcon from './StarIcon.vue'

const MAX_RATING = 7

const props = defineProps({
  rating: Number
})

const emit = defineEmits(['vote'])

function classes(num) {
  return num < props.rating ? 'text-yellow-400' : 'text-gray-500'
}

function formatRating(num) {
  return num === null ? '-' : num
}

function vote(num) {
  if (props.rating !== num) {
    emit('vote', num)
  }
}
</script>

<template>
  <span class="mr-3">Rating: ({{ formatRating(rating) }} / {{ MAX_RATING }})</span>
  <span v-for="num in Array(MAX_RATING).keys()" :key="num">
    <button class="simple" @click="() => vote(num+1)">
      <StarIcon :class="classes(num)" />
    </button>
  </span>
</template>

<style scoped>
.simple {
  appearance: none;
  user-select: none;
  -webkit-user-select: none;
  background-color: transparent;
  border: 0;
}
</style>
