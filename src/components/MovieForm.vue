<script setup>
import ButtonElement from './ButtonElement.vue'
import { useConstants } from '@/composables/useConstants'

const props = defineProps({
  modelValue: Object
})

const emit = defineEmits([
  'abort',
  'update:modelValue'
])

const { genres: allGenres } = useConstants()

const nameElement = useTemplateRef('name')

const movieData = ref({
  genres: [],
  inTheaters: false
})

const isCreateMode = computed(() => !movieData.value.id)
const primaryButtonLabel = computed(() => isCreateMode.value ? 'Add' : 'Update')
const isValid = computed(() => !!movieData.value.name && movieData.value.genres.length)
const invalidReason = computed(() => {
  if (!movieData.value.name) {
    return 'Name is required'
  } else if (!movieData.value.genres.length) {
    return 'Genre is required'
  }
  return ''
})

function handleCancel() {
  emit('abort')
}

function handleSubmit() {
  if (isValid.value) {
    emit('update:modelValue', movieData.value)
  }
}

onBeforeMount(() => {
  if (props.modelValue) {
    movieData.value = props.modelValue
  }
})

onMounted(() => {
  if (!movieData.value.name) {
    nameElement.value.focus()
  }
})
</script>

<template>
  <div class="movie-form">
    <p>
      <label>
        Name
        <br />
        <input type="text" id="name" name="name" ref="name" v-model="movieData.name" />
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
        Image URL
        <br />
        <input type="text" id="image_url" name="image_url" v-model="movieData.image" />
      </label>
    </p>
    <p>
      <label class="relative">
        IMDb number
        <br />
        <input type="text" id="imdb" name="imdb" placeholder="_________" v-model="movieData.imdb" />
        <div id="imdb-prefix">https://www.imdb.com/title/</div>
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
      <ButtonElement label="Cancel" secondary class="w-24" @click="handleCancel" />
      <ButtonElement
        :disabled="!isValid"
        :label="primaryButtonLabel"
        primary
        :data-title="`⚠️&nbsp;&nbsp;${invalidReason}`"
        class="w-24"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<style scoped>
.movie-form {
  width: 60vw;
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
}

input[type='checkbox'] {
  width: 18px;
  height: 18px;
  border: 2px inset #eee;
  margin-right: 6px;
  vertical-align: middle;
}

#imdb,
#imdb-prefix {
  color: var(--tertiary-color);
  padding: 6px;
}
#imdb {
  padding-left: 206px;
  width: 100%;
  color: black;
  z-index: 50;
}
#imdb-prefix {
  position: absolute;
  top: 1.45rem;
  user-select: none;
  font-style: normal;
  padding-left: 8px;
  z-index: 20;
}

.buttonbox {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>
