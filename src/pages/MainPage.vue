<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useStorage } from "@/composables/useStorage";
import MoviePanel from "@/components/MoviePanel.vue";
import Popup from "@/components/Popup.vue";
import MovieForm from "@/components/MovieForm.vue";
import MovieTable from "@/pages/MovieTable.vue";
import movieData from "../movies.json";

const props = defineProps({
  isAddMoviePopupOpen: Boolean,
});

const emit = defineEmits(["close-add-movie"]);

const movies = ref([]);
const sortedMovies = computed(() => [...movies.value].sort(byId));
const genres = computed(() =>
  movies.value.reduce((acc, movie) => {
    acc.push(...movie.genres);
    return acc;
  }, []),
);

const { readData, writeData } = useStorage();

function byId(a, b) {
  return a.id - b.id;
}

function vote(id, rating) {
  const votedMovie = movies.value.find((movie) => movie.id === id);
  if (!votedMovie) {
    return;
  }
  votedMovie.rating = rating;
  writeData(movies.value);
}

function closePopup() {
  emit("close-add-movie");
}

onBeforeMount(() => {
  movies.value = readData();
  if (movies.value === null) {
    movies.value = movieData.items;
  }
});
</script>

<template>
  <div class="main-area px-6 py-5 flex flex-row flex-wrap gap-5">
    <MoviePanel
      v-for="movie in sortedMovies"
      :key="movie.id"
      :movie="movie"
      @vote="(id, rating) => vote(id, rating)"
    />
  </div>
  <div>
    <MovieTable :movies="movies" />
  </div>
  <Popup v-if="isAddMoviePopupOpen">
    <MovieForm :genres="genres" v-click-outside="closePopup" />
  </Popup>
</template>
