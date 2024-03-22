<script setup>
import StarIcon from './StarIcon.vue'

const props = defineProps<{
  rating: number
}>({})

function classes(num) {
  return num <= props.rating ? 'color-gold' : 'color-grey'
}

</script>

<template>
Rating: {{ rating }} / 5
  <span v-for="num in 5" :key="num">
    <StarIcon :class="classes(num)" />
  </span>
</template>

<style scoped>
.color-gold {
  color: gold;
}
.color-grey {
  color: #aaa;
}

</style>
