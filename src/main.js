//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueGoodTablePlugin from 'vue-good-table-next'
import VClickOutside from 'click-outside-vue3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import OverView from "@/views/OverView.vue";
import DetailView from "@/views/DetailView.vue";
import ErrorView from "@/views/ErrorView.vue";

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import '../style.css'
import './assets/vars.css'

// define routes
const routes = [{
    path: '/',
    component: OverView
}, {
    path: '/:id',
    component: DetailView
}, {
    path: '/:pathMatch(.*)',
    component: ErrorView,
    props: { status: 404 }
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
