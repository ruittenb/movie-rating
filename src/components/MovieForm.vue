<script setup>
defineProps({
  movie: Object,
  genres: Array,
});

const emit = defineEmits(["vote"]);

function vote(id, rating) {
  emit("vote", id, rating);
}
</script>

<template>
  <div class="movie-form">
    <h1>Add Movie</h1>
    <p>
      <label>
        Name
        <br />
        <input type="text" id="name" name="name" />
      </label>
    </p>
    <p>
      <label>
        Description
        <br />
        <textarea id="description" name="description" />
      </label>
    </p>
    <p>
      <label>
        Image
        <br />
        <input type="text" id="image_url" name="image_url" />
      </label>
    </p>
    <p>
      <label>
        Genres
        <br />
        <select multiple id="genres" name="genres">
          <option>Snarf</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" />
        In theaters
      </label>
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

.movie-form {
  display: inline-block;
  width: 60vw;
  background-color: #333;
  padding: 30px;
  box-shadow: #111 5px 5px 5px;
  border: 1px solid #eee;
}

label {
  font-style: italic;
}

select,
textarea,
input[type="text"] {
  color: black;
  width: 100%;
  margin-bottom: 8px;
  outline: 0;
  padding: 2px 2px;
}
</style>
