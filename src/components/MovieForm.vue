<script setup>
import { ref } from "vue";
import Butt from "./Butt.vue";

const props = defineProps({
  movie: Object,
  genres: Array,
});

const emit = defineEmits(["add-movie", "close-add-movie"]);

const name = ref();
const description = ref();
const imageUrl = ref();
const genres = ref();
const inTheaters = ref();

function closeForm() {
  console.log("genrees:", props.genres);
  emit("close-add-movie");
}
function submitForm(event) {
  const movie = {
    name: name.value.value,
    description: description.value.value,
    image: imageUrl.value.value,
    genres: genres.value.value,
    inTheaters: inTheaters.value.value === "on",
  };
  console.log("movie: ", movie);
  emit("add-movie", movie);
}
</script>

<template>
  <div class="movie-form">
    <h1>Add Movie</h1>
    <p>
      <label>
        Name
        <br />
        <input type="text" id="name" name="name" ref="name" />
      </label>
    </p>
    <p>
      <label>
        Description
        <br />
        <textarea id="description" name="description" ref="description" />
      </label>
    </p>
    <p>
      <label>
        Image
        <br />
        <input type="text" id="image_url" name="image_url" ref="imageUrl" />
      </label>
    </p>
    <p>
      <label>
        Genres
        <br />
        <select multiple id="genres" name="genres" ref="genres">
          <option v-for="genre in props.genres" :key="genre" value="genre">
            {{ genre }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" ref="inTheaters" />
        In theaters
      </label>
    </p>
    <div class="buttonbox">
      <Butt label="Cancel" @click="closeForm" />
      <Butt label="Add" :primary="true" @click="submitForm" />
    </div>
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

.buttonbox {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
