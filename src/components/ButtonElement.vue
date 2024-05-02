<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  primary: Boolean
})

const classNames = computed(() => ({ primary: props.primary }))
</script>

<template>
  <button :class="classNames">{{ label }}</button>
</template>

<style scoped>
button {
  background-color: var(--tertiary-color);
  border: 2px outset lightgrey;
  border-radius: var(--border-radius);
  width: 90px;
  padding: 4px;
}

button.primary {
  background-color: var(--primary-color);
  border: 2px outset lightgreen;
}

button:active {
  border-style: inset;
}
</style>
