<script setup></script>

<template>
  <div class="popup">
    <slot> This is a popup</slot>
  </div>
</template>

<style scoped>
.popup {
  display: flex;
  place-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: 1000;
  background-color: #0008;
}
</style>
