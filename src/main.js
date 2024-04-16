import { createApp } from 'vue'
import App from './App.vue'
import vClickOutside from 'click-outside-vue3'
import '../style.css'

const app = createApp(App)
app.use(vClickOutside)
app.mount('#app')
