<script setup>
import { ref } from 'vue'
import StatsBar from '@/components/StatsBar.vue'

defineProps({
  averageRating: Number,
  totalNrMovies: Number
})

const emit = defineEmits(['open-add-movie'])

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function addMovie() {
  closeMenu()
  emit('open-add-movie')
}
</script>

<template>
  <div class="menu">
    <StatsBar :average-rating="averageRating" :total-nr-movies="totalNrMovies" />
    <div v-click-outside="closeMenu">
      <img alt="Hamburger Menu" :draggable="false" src="/images/menu-48.png" @click="toggleMenu" />
      <ul v-show="isOpen" class="bg-white m-0 p-1.5">
        <li>Niks</li>
        <li>Nakkes</li>
        <li>Nada</li>
        <li @click="addMovie">Add Movie</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px 8px 8px var(--body-margin-x);
}

ul {
  position: absolute;
  z-index: 30;
  width: 200px;
  top: 62px;
  right: 10px;
}

li {
  @apply text-gray-500 px-3;
  height: 46px;
  line-height: 46px;
  list-style-type: none;
}

li:hover {
  background-color: lightgray;
}
</style>
