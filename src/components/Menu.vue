<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="menu">
    <img src="/images/menu-48.png" @click="toggleMenu">
    <ul v-show="isOpen">
      <li>Hamburger Menu</li>
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
  width: 200px;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 54px;
  right: 10px;
}
li {
  background-color: white;
  color: black;
  margin: 0;
  padding: 0 12px;
  height: 46px;
  line-height: 46px;
  list-style-type: none;
}
</style>
