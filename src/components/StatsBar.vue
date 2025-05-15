<script setup>
const props = defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const total = computed(() => (typeof props.totalNrMovies === 'number' ? props.totalNrMovies : ''))
const average = computed(() => (typeof props.averageRating === 'number' ? props.averageRating.toFixed(1) : ''))
const isAverageValid = computed(() => !isNaN(average.value) && average.value !== Infinity)

</script>

<template>
  <div class="stats-info">
    <span>Total number of movies: {{ total }}</span>
    <template v-if="isAverageValid">
      /
      <span>Average Rating: {{ average }}</span>
    </template>
  </div>
</template>

<style scoped>
.stats-info {
  font-size: 22px;
}
</style>
