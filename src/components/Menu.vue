<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-movie'])

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function addMovie() {
  closeMenu()
  emit('add-movie')
}
</script>

<template>
  <div class="menu">
    <div v-click-outside="closeMenu">
      <img alt="Hamburger Menu" :draggable="false" src="/images/menu-48.png" @click="toggleMenu">
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
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px;
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
