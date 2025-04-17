<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import ButtonElement from './ButtonElement.vue'
import { useConstants } from '@/composables/useConstants'

const props = defineProps({
  modelValue: Object
})

const emit = defineEmits([
  'cancel',
  'update:modelValue'
])

const { genres: allGenres } = useConstants()

const movieData = ref({})

const isCreateMode = computed(() => !movieData.value.id)
const formTitle = computed(() => isCreateMode.value ? 'Add Movie' : 'Edit Movie')
const primaryButtonLabel = computed(() => isCreateMode.value ? 'Add' : 'Update')
const isValid = computed(() => !!movieData.value.name && movieData.value.genres.length)
const invalidReason = computed(() => {
  if (!movieData.value.name) {
    return 'Name is mandatory'
  } else if (!movieData.value.genres.length) {
    return 'Genre is mandatory'
  }
  return ''
})

function handleCancel() {
  emit('cancel')
}

function handleSubmit() {
  if (isValid.value) {
    emit('update:modelValue', movieData.value)
  }
}

watch(
  movieData,
  (newData) => {
    console.log('updated movie data:', newData)
  }, {
    deep: true
  }
)

onMounted(() => {
  movieData.value = props.modelValue ? props.modelValue : {}
  if (!('genres' in movieData.value)) {
    movieData.value.genres = []
  }
})
</script>

<template>
  <div class="movie-form">
    <h1>{{ formTitle }}</h1>
    <p>
      <label>
        Name
        <br />
        <input type="text" id="name" name="name" v-model="movieData.name" />
      </label>
    </p>
    <p>
      <label>
        Description
        <br />
        <textarea id="description" name="description" v-model="movieData.description" />
      </label>
    </p>
    <p>
      <label>
        Image
        <br />
        <input type="text" id="image_url" name="image_url" v-model="movieData.image" />
      </label>
    </p>
    <p>
      <label>
        Genres
        <br />
        <select id="genres" multiple="multiple" name="genres" v-model="movieData.genres" size="6">
          <option v-for="genre in allGenres" :key="genre" :value="genre">
            {{ genre }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" id="inTheaters" v-model="movieData.inTheaters" />
        In theaters
      </label>
    </p>
    <div class="buttonbox">
      <ButtonElement label="Cancel" class="w-24" @click="handleCancel" />
      <ButtonElement
        :disabled="!isValid"
        :label="primaryButtonLabel"
        primary
        :title="invalidReason"
        class="w-24"
        @click="handleSubmit"
      />
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
