<script setup>
import { computed, ref } from 'vue'
import ButtonElement from './ButtonElement.vue'
import { useConstants } from '@/composables/useConstants'

const props = defineProps({
  create: Boolean,
  movie: Object
})

const emit = defineEmits(['add', 'close', 'update'])

const { genres: allGenres } = useConstants()

const name = ref()
const description = ref()
const imageUrl = ref()
const genres = ref()
const inTheaters = ref()

const formTitle = computed(() => (props.create ? 'Add Movie' : 'Edit Movie'))

function closeForm() {
  emit('close')
}

function getSelectedGenres() {
  return Array.prototype.reduce.call(
    genres.value.children,
    (acc, option) => {
      if (option.selected) {
        acc.push(option.value)
      }
      return acc
    },
    []
  )
}

function submitForm() {
  const selectedGenres = getSelectedGenres()
  if (!name.value.value || !selectedGenres) {
    console.log('Missing mandatory field (name or genre)')
    return
  }
  const movieData = {
    ...props.movie,
    name: name.value.value,
    description: description.value.value,
    image: imageUrl.value.value,
    genres: selectedGenres,
    inTheaters: inTheaters.value.value === 'on'
  }
  if (props.create) {
    emit('add', movieData)
  } else {
    emit('update', movieData)
  }
}
</script>

<template>
  <div class="movie-form">
    <h1>{{ formTitle }}</h1>
    <p>
      <label>
        Name
        <br />
        <input type="text" id="name" name="name" ref="name" :value="movie.name" />
      </label>
    </p>
    <p>
      <label>
        Description
        <br />
        <textarea id="description" name="description" ref="description" :value="movie.description" />
      </label>
    </p>
    <p>
      <label>
        Image
        <br />
        <input type="text" id="image_url" name="image_url" ref="imageUrl" :value="movie.image" />
      </label>
    </p>
    <p>
      <label>
        Genres
        <br />
        <select multiple="multiple" id="genres" name="genres" ref="genres" size="6">
          <option v-for="genre in allGenres" :key="genre" :selected="movie.genres.includes(genre)" :value="genre">
            {{ genre }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" ref="inTheaters" :checked="!!movie.inTheaters" />
        In theaters
      </label>
    </p>
    <div class="buttonbox">
      <ButtonElement label="Cancel" class="w-24" @click="closeForm" />
      <ButtonElement v-if="create" label="Add" primary class="w-24" @click="submitForm" />
      <ButtonElement v-else label="Update" primary class="w-24" @click="submitForm" />
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
  padding: 30px;
  background-color: #333;
  box-shadow: #111 5px 5px 5px;
  border: 2px outset #eee;
  border-radius: var(--border-radius);
}

label {
  font-style: italic;
}

select,
textarea,
input[type='text'] {
  color: black;
  width: 100%;
  margin-bottom: 8px;
  outline: 0;
  padding: 6px;
  border: 2px inset #eee;
  border-radius: var(--border-radius);
  /*
  // works but no good style
  box-shadow:
    0 0 0 1px #333,
    0 0 0 2px #eee;
   */
}

input[type='checkbox'] {
  width: 18px;
  height: 18px;
  border: 2px inset #eee;
  margin-right: 6px;
  vertical-align: middle;
}

.buttonbox {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>
