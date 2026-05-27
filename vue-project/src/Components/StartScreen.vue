<template>
  <div class="start-screen">
    <div class="overlay">
      <div class="hero-card">
        <p class="subtitle">Juego Bíblico Interactivo</p>

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

          <button class="btn-secondary">
            Ver Instrucciones
          </button>
        </div>

        <div class="verse-box">
          <p class="verse">
            “Lámpara es a mis pies tu palabra, y lumbrera a mi camino.”
          </p>
          <span class="reference">Salmos 119:105</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./StartScreen.js"></script>
<style src="./StartScreen.css"></style>