//import Vue from 'vue'
import { createApp } from 'vue'
import VClickOutside from 'click-outside-vue3'
import VueGoodTablePlugin from 'vue-good-table-next'
import App from './App.vue'

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import '../style.css'

// start code
const app = createApp(App)
app.use(VueGoodTablePlugin);
app.use(VClickOutside)
app.mount('#app')
