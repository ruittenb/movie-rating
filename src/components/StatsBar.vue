<script setup>
import { computed } from 'vue'

const props = defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const average = computed(() => (typeof props.averageRating === 'number' ? props.averageRating.toFixed(1) : ''))
const total = computed(() => (typeof props.totalNrMovies === 'number' ? props.totalNrMovies : ''))
</script>

<template>
  <div class="stats-info">
    <span>Total number of movies: {{ total }}</span>
    /
    <span>Average Rating: {{ average }}</span>
  </div>
</template>

<style scoped>
.stats-info {
  font-size: 22px;
}
</style>
