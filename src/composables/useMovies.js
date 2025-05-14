import { computed, ref } from "vue";
import { cloneDeep } from 'lodash-es';
import { useStorage } from "@/composables/useStorage";
import { useUtils } from "@/composables/useUtils";
import jsonMovieData from '../movies.json'

const { retrieveData, storeData } = useStorage()
const { byId, byName, byRating } = useUtils()

const sorters = {
    BY_ID: byId,
    BY_NAME: byName,
    BY_RATING: byRating,
}

const movies = ref([])
const sortMode = ref('BY_ID')
const sortedMovies = computed(() => cloneDeep(movies.value).sort(sorters[sortMode.value]))

const lastId = computed(() => Math.max(...movies.value.map((movie) => movie.id)))
const totalNrMovies = computed(() => movies.value.length)
const averageRating = computed(
    () => {
        // only add a movie to the average rating if there is a rating at all
        const stats = movies.value
            .reduce((acc, movie) => {
                if (movie.rating) {
                    acc.ratings += movie.rating
                    acc.number += 1
                }
                return acc
            }, { ratings: 0, number: 0 })
        // NOTE: we may be dividing by zero, so this may return NaN.
        return stats.ratings / stats.number
    }
)

export function useMovies() {
    function resetRatings() {
        movies.value = movies.value.map((movie) => ({ ...movie, rating: null }))
        storeData(movies.value)
    }

    function resetAllMovieData() {
        movies.value = jsonMovieData.items
        storeData(movies.value)
    }

    function rateMovie(id, rating) {
        const votedMovie = movies.value.find((movie) => movie.id === id)
        if (!votedMovie) {
            return
        }
        votedMovie.rating = rating
        storeData(movies.value)
    }

    function removeMovie(id) {
        movies.value = movies.value.filter((movie) => movie.id !== id)
        storeData(movies.value)
    }

    function updateMovie(newMovie) {
        if (newMovie.id) {
            movies.value = movies.value.map((oldMovie) => (oldMovie.id !== newMovie.id ? oldMovie : newMovie))
        } else {
            movies.value.push({ ...newMovie, rating: null, id: lastId.value + 1 })
        }
        storeData(movies.value)
    }

    function getMovie(id) {
        return cloneDeep(
            movies.value.find((movie) => movie.id === id)
        )
    }

    function sortMovies(mode) {
        if (mode in sorters) {
            sortMode.value = mode
        }
    }

    onBeforeMount(() => {
        movies.value = retrieveData()
        if (movies.value === null) {
            movies.value = jsonMovieData.items
        }
    })

    return {
        movies: sortedMovies,
        averageRating,
        getMovie,
        rateMovie,
        removeMovie,
        resetAllMovieData,
        resetRatings,
        sortMovies,
        totalNrMovies,
        updateMovie
    }
}
