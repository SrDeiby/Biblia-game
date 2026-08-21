<template>
  <div class="start-screen">
    <div class="overlay">
      <div class="hero-card">
        <p class="subtitle">Juego Bíblico Interactivo para Niños</p>

        <h1 class="title">
          Bible Quest
        </h1>

        <p class="description">
          Descubre cuánto conoces sobre personajes, historias y versículos de la Biblia
          mientras avanzas por desafíos llenos de sabiduría y fe.
        </p>

        <div class="buttons">
          <button class="btn-primary" @click="startGame">
            Comenzar Juego
          </button>

          <button class="btn-secondary" @click="showInstructions = true">
            Ver Instrucciones
          </button>

        </div>

        <button class="btn-audio" @click="shutDownAudio" :title="audioOn ? 'Silenciar' : 'Activar sonido'">
  {{ audioOn ? '🔊' : '🔇' }}
</button>

        <div class="verse-box">
          <p class="verse">
            "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
          </p>
          <span class="reference">Salmos 119:105</span>
        </div>
      </div>
    </div>

    <!-- Modal de instrucciones -->
    <Transition name="modal">
      <div v-if="showInstructions" class="modal-backdrop" @click.self="showInstructions = false">
        <div class="modal-card">

          <!-- Esquinas decorativas -->
          <span class="modal-corner tl">✦</span>
          <span class="modal-corner tr">✦</span>
          <span class="modal-corner bl">✦</span>
          <span class="modal-corner br">✦</span>

          <div class="modal-header">
            <div class="modal-emblem">✝</div>
            <h2 class="modal-title">Instrucciones</h2>
            <div class="modal-divider">— ✦ —</div>
          </div>

          <ol class="modal-steps">
            <li>
              <span class="step-icon">🗺️</span>
              <div>
                <strong>Explora el mapa</strong>
                Elige una región del mundo bíblico para comenzar tu travesía.
              </div>
            </li>
            <li>
              <span class="step-icon">📖</span>
              <div>
                <strong>Responde preguntas</strong>
                Cada región tiene preguntas sobre versículos, personajes e historias.
              </div>
            </li>
            <li>
              <span class="step-icon">⭐</span>
              <div>
                <strong>Acumula puntos</strong>
                Cada respuesta correcta suma puntos. Las respuestas incorrectas no restan.
              </div>
            </li>
            <li>
              <span class="step-icon">🏆</span>
              <div>
                <strong>Completa todas las regiones</strong>
                Desbloquea todas las zonas y demuestra tu conocimiento bíblico.
              </div>
            </li>
          </ol>

          <p class="modal-tip">
            💡 <em>Tip:</em> puedes pausar la música con el botón 🔊 en cualquier momento.
          </p>

          <button class="modal-close" @click="showInstructions = false">
            Entendido
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script src="./StartScreen.js"></script>
<style src="./StartScreen.css"></style>