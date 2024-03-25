<script setup>
import StarIcon from './StarIcon.vue'

const MAX_RATING = 5

const props = defineProps({
  rating: Number
})

const emit = defineEmits(['vote'])

function classes(num) {
  return num < props.rating ? 'text-yellow-300' : 'text-gray-500'
}

function vote(num) {
  if (props.rating !== num) {
    emit('vote', num)
  }
}
</script>

<template>
  <span class="mr-3">Rating: ({{ rating }} / {{ MAX_RATING }})</span>
  <span v-for="num in Array(5).keys()" :key="num">
    <button class="simple" @click="() => vote(num+1)">
      <StarIcon :class="classes(num)" />
    </button>
  </span>
</template>

<style scoped>
.simple {
  appearance: none;
  background-color: transparent;
  border: 0;
}
</style>
