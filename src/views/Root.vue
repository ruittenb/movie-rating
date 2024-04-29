<script setup>
import { ref } from "vue";
import Menu from "../components/Menu.vue";
import MainPage from "../pages/MainPage.vue";

const isAddMoviePopupOpen = ref(false);

function openAddMoviePopup() {
  isAddMoviePopupOpen.value = true;
}
</script>

<template>
  <div class="page">
    <Menu @open-add-movie="openAddMoviePopup" />
    <MainPage :is-add-movie-popup-open="isAddMoviePopupOpen" />
  </div>
</template>

<style scoped>
.page {
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
