<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="menu">
    <img alt="Hamburger Menu" src="/images/menu-48.png" @click="toggleMenu">
    <ul v-show="isOpen" class="bg-white m-0 p-1.5">
      <li class="text-gray-600 px-3">Hamburger Menu</li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px;
}
ul {
  position: absolute;
  width: 200px;
  top: 54px;
  right: 10px;
}
li {
  height: 46px;
  line-height: 46px;
  list-style-type: none;
}
li:hover {
  background-color: lightgray;
}
</style>
