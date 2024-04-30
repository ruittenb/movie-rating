<script setup>
import { computed } from "vue";
const props = defineProps({
  movies: Array,
});

const columns = computed(() => [
  {
    label: "Id",
    field: "id",
    type: "number",
  },
  {
    label: "Name",
    field: "name",
    type: "string",
  },
  {
    label: "Description",
    field: "description",
    type: "string",
    width: "35vw",
  },
  {
    label: "Image",
    field: "image",
    type: "string",
    sortable: false,
  },
  {
    label: "Rating",
    field: "rating",
    type: "number",
  },
  {
    label: "Genres",
    field: "genres",
    formatFn: (value) => value.join(", "),
  },
  {
    label: "In Theaters",
    field: "inTheaters",
    type: "boolean",
    formatFn: (value) => (value ? "Yes" : "No"),
  },
]);
</script>

<template>
  <vue-good-table
    :columns="columns"
    :rows="movies"
    :pagination-options="{
      enabled: true,
      perPage: 3,
    }"
    class="movie-table"
  >
    <template #table-row="props">
      <span v-if="props.column.field == 'image'">
        <a :href="props.row.image" target="_blank">Poster&nbsp;image</a>
      </span>
      <span v-else>
        {{ props.formattedRow[props.column.field] }}
      </span>
    </template>
    <template #emptystate> No movies found </template>
  </vue-good-table>
  <br />
</template>

<style scoped>
.movie-table {
  margin: 20px;
  color: black;
  font-size: 18px;
}
a[href]:deep {
  text-decoration: underline;
}
</style>
