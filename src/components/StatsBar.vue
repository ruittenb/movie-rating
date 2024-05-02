<script setup>
import { computed } from 'vue'

const props = defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const displayRating = computed(() => (typeof props.averageRating === 'number' ? props.averageRating.toFixed(1) : ''))
const displayTotal = computed(() => (typeof props.totalNrMovies === 'number' ? props.totalNrMovies : ''))
</script>

<template>
  <div class="aggregation-info">
    <span>Total number of movies: {{ displayTotal }}</span>
    /
    <span>Average Rating: {{ displayRating }}</span>
  </div>
</template>
