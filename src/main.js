//import Vue from 'vue'
import VClickOutside from 'click-outside-vue3'
import VueGoodTablePlugin from 'vue-good-table-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import '../style.css'
import './assets/vars.css'

// start code
const app = createApp(App)
app.use(VClickOutside)
app.use(VueGoodTablePlugin)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
