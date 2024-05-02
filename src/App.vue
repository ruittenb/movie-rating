<script setup>
import Root from './views/Root.vue'
import { useIcons } from '@/composables/useIcons'

useIcons()
</script>

<template>
  <Root />
</template>

<style>
:root {
  --body-margin-x: 1.5rem;
  --border-radius: 6px;
  --primary-color: mediumseagreen;
  --secondary-color: mediumseagreen;
  --tertiary-color: darkgray;
}
</style>
