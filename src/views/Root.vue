<script setup>
import Menu from '../components/Menu.vue'
import MainPage from '../pages/MainPage.vue'
</script>

<template>
  <!-- This is where your template goes	-->
  <div class="page">
    <Menu />
    <MainPage />
  </div>
</template>

<style scoped>
.page {
  background-color: black;
  color: whitesmoke;
  height: 100%;
  width: 100%;
}
</style>
