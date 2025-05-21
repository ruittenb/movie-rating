<script setup lang="ts">
defineProps({
  status: String
})
</script>

<template>
<div>
  <h1>{{ status }}</h1>
</div>
</template>

<style scoped>
div {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 144px;
    font-weight: bold;
    color: lightgray;
  }
}
</style>
