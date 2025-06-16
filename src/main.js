//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueGoodTablePlugin from 'vue-good-table-next'
import VClickOutside from 'click-outside-vue3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import GridView from "@/views/GridView.vue";
import DetailView from "@/views/DetailView.vue";
import ErrorView from "@/views/ErrorView.vue";

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import '../style.css'
import './assets/vars.css'

// define routes
const routes = [{
    path: '/',
    name: 'gridView',
    component: GridView
}, {
    path: '/:id',
    name: 'detailView',
    component: DetailView
}, {
    path: '/:pathMatch(.*)',
    name: 'errorView',
    component: ErrorView,
    props: { statusCode: 404, statusMessage: 'Not Found' }
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})

// start code
const app = createApp(App)
app.use(router)
app.use(VClickOutside)
app.use(VueGoodTablePlugin)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
