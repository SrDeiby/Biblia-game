<template>
  <div class="game-screen">

    <!-- Encabezado -->
    <div class="game-header">
      <button class="btn-back" @click="goBack">← Mapa</button>
      <h2 class="region-title">{{ region }}</h2>
      <div class="score-badge">{{ score }} / {{ total }}</div>
    </div>

    <!-- Barra de progreso -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>

    <!-- Juego activo -->
    <Transition name="slide" mode="out-in">
<div v-if="!finished && currentQuestion" :key="currentIndex" class="question-card">

        <p class="question-counter">Pregunta {{ currentIndex + 1 }} de {{ total }}</p>
        <h3 class="question-text">{{ currentQuestion.pregunta }}</h3>

        <div class="options-grid">
          <button
            v-for="opcion in currentQuestion.opciones"
            :key="opcion"
            class="option-btn"
            :class="getOptionClass(opcion)"
            :disabled="answered"
            @click="answer(opcion)"
          >
            {{ opcion }}
          </button>
        </div>

        <!-- Feedback + versículo -->
        <Transition name="fade">
          <div v-if="answered" class="feedback" :class="isCorrect ? 'feedback--correct' : 'feedback--wrong'">
            <span class="feedback__icon">{{ isCorrect ? '✅' : '❌' }}</span>
            <div>
              <p class="feedback__text">
                {{ isCorrect ? '¡Correcto!' : `La respuesta era: ${currentQuestion.respuesta}` }}
              </p>
              <p class="feedback__verse">📖 {{ currentQuestion.versiculo }}</p>
            </div>
            <button class="btn-next" @click="next">
              {{ currentIndex + 1 < total ? 'Siguiente →' : 'Ver resultado →' }}
            </button>
          </div>
        </Transition>

      </div>
    </Transition>

    <!-- Pantalla de resultado final -->
    <Transition name="fade">
      <div v-if="finished" class="results-card">
        <div class="results-icon">{{ resultIcon }}</div>
        <h2 class="results-title">{{ resultTitle }}</h2>
        <p class="results-score">{{ score }} de {{ total }} correctas</p>
        <p class="results-message">{{ resultMessage }}</p>
        <div class="results-actions">
          <button class="btn-primary" @click="restart">🔄 Intentar de nuevo</button>
          <button class="btn-secondary" @click="goBack">🗺️ Elegir otra región</button>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script src="./GameScreen.js"></script>
<style src="./GameScreen.css"></style>