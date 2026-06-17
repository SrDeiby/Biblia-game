// src/plugins/audioPlugin.js

const AudioPlugin = {
  install(app, options = {}) {
    const audio = new Audio(options.src || '/audio/background.mp3')
    audio.loop    = true
    audio.volume  = options.volume ?? 0.5

    // Estado persistente: si el usuario nunca tocó el botón, asumimos ON
    const STORAGE_KEY = 'biblequest_audio_enabled'

    function isEnabled() {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === null ? true : stored === 'true'
    }

    function setEnabled(val) {
      localStorage.setItem(STORAGE_KEY, String(val))
    }

    // Intenta reproducir; si el navegador bloquea el autoplay,
    // espera el primer clic/toque del usuario para intentar de nuevo.
    function tryPlay() {
      if (!isEnabled()) return

      audio.play().catch(() => {
        // Autoplay bloqueado → esperamos interacción
        const unlock = () => {
          if (isEnabled()) {
            audio.play().catch(() => {})
          }
          window.removeEventListener('click',     unlock)
          window.removeEventListener('touchstart', unlock)
          window.removeEventListener('keydown',    unlock)
        }
        window.addEventListener('click',     unlock, { once: true })
        window.addEventListener('touchstart', unlock, { once: true })
        window.addEventListener('keydown',   unlock, { once: true })
      })
    }

    const $audio = {
      /** Llama esto en mounted() de la pantalla inicial */
      play() {
        tryPlay()
      },

      /** Alterna mute y persiste la preferencia */
      toggle() {
        const next = !isEnabled()
        setEnabled(next)

        if (next) {
          tryPlay()
        } else {
          audio.pause()
          audio.currentTime = 0
        }

        return next  // devuelve el nuevo estado (true = sonando)
      },

      /** Útil para mostrar el ícono correcto en el botón */
      get enabled() {
        return isEnabled()
      },

      /** Acceso al elemento Audio por si lo necesitas */
      get instance() {
        return audio
      }
    }

    app.config.globalProperties.$audio = $audio
    app.provide('audio', $audio)
  }
}

export default AudioPlugin