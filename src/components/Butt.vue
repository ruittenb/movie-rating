<script setup>
import { computed } from "vue";

const props = defineProps({
  label: String,
  primary: Boolean,
});

const classNames = computed(() => ({ primary: props.primary }));
</script>

<template>
  <button :class="classNames">{{ label }}</button>
</template>

<style scoped>
button {
  background-color: darkgray;
  border: 2px outset gray;
  border-radius: 6px;
  width: 90px;
  padding: 4px;
}
button.primary {
  background-color: mediumseagreen;
  border: 2px outset darkgreen;
}
button:active {
  border-style: inset;
}
</style>
