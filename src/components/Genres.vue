<script setup>
import Genre from './Genre.vue'

defineProps({
  names: Array
})
</script>

<template>
  <Genre v-for="name in names" :key="name" :name="name" class="mr-2" />
</template>

<style scoped></style>
