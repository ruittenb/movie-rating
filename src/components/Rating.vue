<script setup>
import StarIcon from './StarIcon.vue'

const MAX_RATING = 5

const props = defineProps({
  rating: Number
})

function classes(num) {
  return num < props.rating ? 'text-yellow-300' : 'text-gray-500'
}
</script>

<template>
  <span class="mr-3">Rating: {{ rating }} / {{ MAX_RATING }}</span>
  <span v-for="num in Array(5).keys()" :key="num">
    <StarIcon :class="classes(num)" />
  </span>
</template>

<style scoped>
</style>
