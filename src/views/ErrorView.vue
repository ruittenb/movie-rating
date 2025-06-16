<script setup>

defineProps({
  statusCode: Number,
  statusMessage: String
})
</script>

<template>
<div>
  <div class="background">{{ statusMessage }}</div>
  <h1>{{ statusCode }}</h1>
</div>
</template>

<style scoped>
div {
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  & > h1 {
    font-size: 10vw;
    color: lightgray;
  }
  & > .background {
    font-size: 26vw;
    color: #444;
    white-space: nowrap;
    z-index: -1;
    overflow: hidden;
  }
}
</style>
