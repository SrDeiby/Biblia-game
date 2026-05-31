import menuMusic from '../assets/audio/StartScreen.mp3'
 
const audioPlugin = {
  install(app) {
    const audio = new Audio(menuMusic)
    audio.loop = true
    audio.volume = 0.3
 
    const audioManager = {
      audio,
 
      play() {
        if (audio.paused) {
          audio.play().catch(() => {
            console.log('El navegador bloqueó el autoplay.')
          })
        }
      },
 
      pause() {
        if (!audio.paused) {
          audio.pause()
        }
      },
 
      toggle() {
        if (audio.paused) {
          this.play()
        } else {
          this.pause()
        }
      },
 
      stop() {
        audio.pause()
        audio.currentTime = 0
      },
 
      setVolume(val) {
        audio.volume = Math.max(0, Math.min(1, val))
      },
 
      get isPlaying() {
        return !audio.paused
      }
    }
 
    // Disponible como this.$audio en cualquier componente
    app.config.globalProperties.$audio = audioManager
 
    // Disponible también con provide/inject
    app.provide('audio', audioManager)
  }
}
 
export default audioPlugin