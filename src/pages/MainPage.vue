<script setup>
import { useMovies } from '@/composables/useMovies'
import MoviePanel from '@/components/MoviePanel.vue'
import MovieTable from '@/components/MovieTable.vue'

const emit = defineEmits([
  'edit',
])

const { movies, rateMovie, removeMovie } = useMovies()

function handleEditMovie(movieId) {
  emit('edit', movieId)
}

function handleRemoveMovie(movieId) {
  removeMovie(movieId)
}

function handleUpdateRating(movieId, rating) {
  rateMovie(movieId, rating)
}
</script>

<template>
  <TransitionGroup name="list" tag="div" class="main-area px-6 py-5 mt-16 flex flex-row flex-wrap gap-5">
    <MoviePanel
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @edit="handleEditMovie"
      @remove="handleRemoveMovie"
      @update:rating="handleUpdateRating"
    />
  </TransitionGroup>
  <div>
    <MovieTable :movies="movies" />
  </div>
</template>

<style scoped>
.main-area {
  padding-left: var(--body-margin-x);
  padding-right: var(--body-margin-x);
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
