<script setup>
import { RouterView } from 'vue-router'
import { useIcons } from '@/composables/useIcons'

useIcons()
</script>

<template>
  <RouterView />
</template>
