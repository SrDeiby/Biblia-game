import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import audioPlugin from './assets/audioPlugin.js'
import audioSrc from './assets/audio/StartScreen.mp3'  // ← importa el archivo

const app = createApp(App)

app.use(router)
app.use(audioPlugin, {
  src: audioSrc,   // ← usa la variable importada
  volume: 0.4
})
app.mount('#app')