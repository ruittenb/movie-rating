<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  primary: Boolean,
  danger: Boolean
})

const classNames = computed(() => ({
  primary: props.primary,
  danger: props.danger
}))
</script>

<template>
  <button :class="classNames">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
button {
  background-color: var(--tertiary-color);
  border: 2px outset lightgrey;
  border-radius: var(--border-radius);
  padding: 4px;
}

button.primary {
  background-color: var(--primary-color);
  border: 2px outset lightgreen;
}
button.danger {
  background-color: var(--danger-color);
  border: 2px outset lightcoral;
  color: lightgrey;
}

button:active {
  border-style: inset;
}
</style>
