<script setup>
const props = defineProps({ rating: Number })

const starColorClass = computed(() => (props.rating !== null ? 'text-star-gold' : 'text-star-disabled'))
const textColorClass = computed(() => (props.rating !== null ? 'text-black' : 'text-white'))
</script>

<template>
  <FontAwesomeIcon icon="star" class="top-right-overlay top-1" :class="starColorClass" />
  <div class="top-right-overlay top-7 text-3xl text-center" :class="textColorClass">{{ rating ? rating : '-' }}</div>
</template>

<style scoped>
.top-right-overlay {
  @apply absolute right-1 w-20 h-20;
}
</style>
