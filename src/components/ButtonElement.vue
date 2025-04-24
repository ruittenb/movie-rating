<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  primary: Boolean,
  secondary: Boolean,
  danger: Boolean,
  disabled: Boolean
})

const classNames = computed(() => ({
  primary: props.primary,
  secondary: props.secondary,
  danger: props.danger
}))
</script>

<template>
  <button :disabled="disabled" :class="classNames">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
button {
  background-color: var(--tertiary-color);
  border: 2px outset color-mix(in hsl, var(--tertiary-color), white 50%);
  border-radius: var(--border-radius);
  padding: 4px;
}

button.primary:not(:disabled) {
  background-color: var(--primary-color);
  border: 2px outset color-mix(in hsl, var(--primary-color), white 50%);
}
button.secondary:not(:disabled) {
  background-color: var(--secondary-color);
  border: 2px outset color-mix(in hsl, var(--secondary-color), white 50%);
}
button.danger {
  background-color: var(--danger-color);
  border: 2px outset color-mix(in hsl, var(--danger-color), white 50%);
  color: lightgrey;
}

button:disabled {
  cursor: not-allowed;
}

button:active:not(:disabled) {
  border-style: inset;
}
</style>
