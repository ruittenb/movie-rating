<script setup>
const MAX_RATING = 10

const props = defineProps({
  rating: Number
})

const emit = defineEmits(['vote'])

function classes(num) {
  return num < props.rating ? 'text-star-gold' : 'text-star-disabled'
}

function formatRating(num) {
  return num === null ? '-' : num
}

function vote(num) {
  if (props.rating !== num) {
    emit('vote', num)
  } else {
    emit('vote', null)
  }
}
</script>

<template>
  <span class="mr-3">Rating: ({{ formatRating(rating) }}/{{ MAX_RATING }})</span>
  <span v-for="num in Array(MAX_RATING).keys()" :key="num">
    <button class="simple" @click="() => vote(num + 1)">
      <FontAwesomeIcon icon="star" class="w-4 h-4" :class="classes(num)" />
    </button>
  </span>
</template>

<style scoped>
.simple {
  appearance: none;
  user-select: none;
  -webkit-user-select: none;
  background-color: transparent;
  font-size: 18px;
  border: 0;
}
</style>
