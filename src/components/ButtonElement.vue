<script setup>
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
  position: relative;
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

button[data-title]:disabled:hover::after {
  display: block;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  background-color: var(--danger-color);
  padding: 10px 30px;
  border-radius: var(--border-radius);
  content: attr(data-title);
  z-index: 50;
}
</style>
