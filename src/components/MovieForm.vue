<script setup>

defineProps({
  movie: Object
})

const emit = defineEmits(['vote'])

function vote(id, rating) {
  emit('vote', id, rating)
}
</script>

<template>
  <div class="movie-form">
    <p>Name</p>
    <input type="text" id="name" name="name" />
    <p>Description</p>
    <textarea id="description" name="description" />
    <p>Image</p>
    <input type="text" id="image_url" name="image_url" />
    <p>Genres</p>
    <p>
      <label>
        <input type="checkbox" />
        In theaters
      </label>
    </p>
  </div>
</template>

<style scoped>
.movie-form {
  display: inline-block;
  width: 60vw;
  background-color: #333;
  padding: 20px;
}
input[type^=checkbox] {
  width: 100%;
}

</style>
