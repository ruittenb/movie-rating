<script setup>
import ButtonElement from "@/components/ButtonElement.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  show: Boolean,
  title: String
})

const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}
</script>

<template>
  <Transition name="modal" appear>
    <div v-if="show" class="mask">
      <div class="modal-window">
        <div class="modal-title">
          <h1>{{ props.title }}</h1>
          <ButtonElement @click="handleClose">
            <FontAwesomeIcon icon="xmark" />
          </ButtonElement>
        </div>
        <div class="modal-body">
          <slot>This is a modal dialog</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.mask {
  --animation-timescale: 0.2s;
  display: flex;
  place-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: 1000;
  background-color: #0002;
  backdrop-filter: blur(4px);
}

.modal-leave-to,
.modal-enter-from {
  background-color: transparent;
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: background-color var(--animation-timescale) ease, opacity var(--animation-timescale) ease;
}

.modal-window {
  display: inline-block;
  min-width: 100px;
  padding: 30px;
  background-color: #333;
  box-shadow: var(--box-shadow-color) 5px 5px 10px;
  border: 2px outset #eee;
  border-radius: var(--border-radius);
  transform: translateY(0px);
}

.modal-leave-to .modal-window,
.modal-enter-from .modal-window {
  transform: translateY(-50px);
}
.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: transform var(--animation-timescale) ease;
}

.modal-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;

  & h1 {
    font-size: 24px;
  }

  & button {
    display: inline-block;
    height: 32px;
    width: 32px;
    margin: auto 0;
    line-height: 0; /* center the icon vertically */
  }
}

</style>
