import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import audioPlugin from './assets/audioPlugin.js' 

const app = createApp(App)

app.use(router)
app.use(audioPlugin)
app.mount('#app')