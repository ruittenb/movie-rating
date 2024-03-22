<script setup>
import Genre from './Genre.vue'

defineProps({
  names: Array
})
</script>

<template>
  <Genre v-for="name in names" :key="name" :name="name" class="mr-3" />
</template>

<style scoped>
</style>
