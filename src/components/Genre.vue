<script setup>
defineProps({
  name: String
})
</script>

<template>
  <div class="genre">{{ name }}</div>
</template>

<style scoped>
.genre {
  @apply bg-blue-600 text-white px-2 inline-block;
  --radius: 12px;
  border-radius: var(--radius);
  height: calc(2 * var(--radius));
  line-height: calc(2 * var(--radius));
  font-size: 10px;
}
</style>
