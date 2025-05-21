<script setup>
import OverView from './views/OverView.vue'
import DetailView from './views/DetailView.vue'
import { useIcons } from '@/composables/useIcons'
import { RouterView } from 'vue-router'

useIcons()
</script>

<template>
  <RouterView />
</template>
