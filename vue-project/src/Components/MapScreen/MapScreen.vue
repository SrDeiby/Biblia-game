<template>
  <div class="map-screen">
 
    <div class="title-container">
      <h1>Selecciona una Región</h1>
      <p>Escoge una región del mapa para comenzar tu desafío bíblico.</p>
    </div>
 
    <div class="map-container">
 
      <!-- SVG Map replaces la imagen Mapa.jpg -->
      <svg
        class="map-svg"
        viewBox="0 0 680 820"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mapa bíblico interactivo de la Tierra Santa"
      >
        <defs>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#b8d9e8"/>
            <stop offset="100%" stop-color="#8fc4d8"/>
          </linearGradient>
        </defs>
 
        <!-- Pergamino / marco exterior -->
        <rect x="0" y="0" width="680" height="820" fill="#e8d5a8" rx="18"/>
        <rect x="10" y="10" width="660" height="800" fill="#d4ba82" rx="14"
          stroke="#b8934a" stroke-width="2.5" fill-opacity="0.3"/>
 
        <!-- Masa de tierra principal -->
        <path d="M120,40 L560,40 L580,80 L590,180 L570,300 L560,440 L540,560 L510,680
                 L480,760 L420,790 L360,800 L300,790 L240,760 L200,680 L160,560
                 L140,440 L120,300 L110,180 L120,80 Z"
          fill="#c9b87a" stroke="#a89050" stroke-width="1.5"/>
 
        <!-- Mar Mediterráneo -->
        <path d="M0,0 L130,0 L120,40 L110,180 L120,300 L140,440 L160,560
                 L200,680 L240,760 L300,790 L300,820 L0,820 Z"
          fill="url(#seaGrad)" opacity="0.85"/>
        <text x="58" y="420" font-family="serif" font-size="11" fill="#2a5a7a"
          text-anchor="middle" transform="rotate(-90,58,420)">Mar Mediterráneo</text>
 
        <!-- Río Jordán -->
        <path d="M420,120 Q430,200 425,280 Q420,360 415,450 Q410,530 400,620 Q395,680 390,730"
          fill="none" stroke="#6aabcc" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
        <text x="448" y="430" font-family="serif" font-size="11" fill="#2a5a7a"
          text-anchor="middle" transform="rotate(85,448,430)">Río Jordán</text>
 
        <!-- Mar de Galilea -->
        <ellipse cx="430" cy="230" rx="42" ry="58" fill="#6aabcc" opacity="0.9"/>
        <text x="430" y="228" font-family="serif" font-size="10" fill="#0d3a52" text-anchor="middle">Mar de</text>
        <text x="430" y="242" font-family="serif" font-size="10" fill="#0d3a52" text-anchor="middle">Galilea</text>
 
        <!-- Mar Muerto -->
        <ellipse cx="420" cy="640" rx="32" ry="55" fill="#5a9ab0" opacity="0.75"/>
        <text x="420" y="638" font-family="serif" font-size="9.5" fill="#0d2d3a" text-anchor="middle">Mar</text>
        <text x="420" y="651" font-family="serif" font-size="9.5" fill="#0d2d3a" text-anchor="middle">Muerto</text>
 
        <!-- === REGIONES CLICABLES === -->
 
        <!-- Región: Galilea -->
        <path
          class="region-area"
          :class="{ 'region-active': hoveredRegion === 'Galilea' }"
          d="M140,60 L540,60 L560,180 L550,300 L420,290 L420,170 L380,120 L200,100 Z"
          fill="#5a6b2e"
          opacity="0.32"
          stroke="#6a7d36"
          stroke-width="1.5"
          @click="selectRegion('Galilea')"
          @mouseenter="hoveredRegion = 'Galilea'"
          @mouseleave="hoveredRegion = null"
        />
 
        <!-- Región: Nazaret -->
        <ellipse
          class="region-area"
          :class="{ 'region-active': hoveredRegion === 'Nazaret' }"
          cx="280" cy="280" rx="90" ry="70"
          fill="#7a4a1e"
          opacity="0.28"
          stroke="#9a5e28"
          stroke-width="1.5"
          @click="selectRegion('Nazaret')"
          @mouseenter="hoveredRegion = 'Nazaret'"
          @mouseleave="hoveredRegion = null"
        />
 
        <!-- Región: Jerusalén -->
        <path
          class="region-area"
          :class="{ 'region-active': hoveredRegion === 'Jerusalén' }"
          d="M190,480 L440,480 L460,560 L440,620 L400,580 L360,580 L340,620
             L300,610 L250,580 L200,600 L170,560 Z"
          fill="#c9922a"
          opacity="0.28"
          stroke="#d4a030"
          stroke-width="1.5"
          @click="selectRegion('Jerusalén')"
          @mouseenter="hoveredRegion = 'Jerusalén'"
          @mouseleave="hoveredRegion = null"
        />
 
        <!-- Región: Belén -->
        <ellipse
          class="region-area"
          :class="{ 'region-active': hoveredRegion === 'Belén' }"
          cx="320" cy="670" rx="75" ry="55"
          fill="#4a2c7a"
          opacity="0.28"
          stroke="#6a3e9a"
          stroke-width="1.5"
          @click="selectRegion('Belén')"
          @mouseenter="hoveredRegion = 'Belén'"
          @mouseleave="hoveredRegion = null"
        />
 
        <!-- Montañas decorativas -->
        <path d="M160,350 L180,310 L200,350 Z" fill="#b09060" opacity="0.5"/>
        <path d="M200,370 L225,320 L250,370 Z" fill="#b09060" opacity="0.5"/>
        <path d="M470,350 L490,310 L510,350 Z" fill="#b09060" opacity="0.45"/>
        <path d="M460,400 L480,355 L500,400 Z" fill="#b09060" opacity="0.4"/>
        <path d="M170,500 L188,465 L206,500 Z" fill="#9a7a4a" opacity="0.45"/>
 
        <!-- Camino entre ciudades -->
        <path d="M280,280 Q300,380 310,490" fill="none" stroke="#a08040"
          stroke-width="1.5" stroke-dasharray="6,5" opacity="0.6"/>
        <path d="M310,490 Q315,580 320,620" fill="none" stroke="#a08040"
          stroke-width="1.5" stroke-dasharray="6,5" opacity="0.6"/>
 
        <!-- === MARCADORES DE CIUDADES === -->
 
        <!-- Galilea -->
        <g class="city-marker"
          @click="selectRegion('Galilea')"
          @mouseenter="hoveredRegion = 'Galilea'"
          @mouseleave="hoveredRegion = null"
        >
          <circle cx="320" cy="155" r="28"
            :fill="selectedRegion === 'Galilea' ? '#4a5c20' : '#5a6b2e'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="320" y="150" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Galilea</text>
          <text x="320" y="165" font-family="serif" font-size="9.5"
            fill="#d4e8a0" text-anchor="middle">Región Norte</text>
        </g>
 
        <!-- Nazaret -->
        <g class="city-marker"
          @click="selectRegion('Nazaret')"
          @mouseenter="hoveredRegion = 'Nazaret'"
          @mouseleave="hoveredRegion = null"
        >
          <circle cx="260" cy="290" r="28"
            :fill="selectedRegion === 'Nazaret' ? '#5a3010' : '#7a4a1e'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="260" y="286" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Nazaret</text>
          <text x="260" y="301" font-family="serif" font-size="9.5"
            fill="#f0d4a8" text-anchor="middle">Tierra de Jesús</text>
        </g>
 
        <!-- Jerusalén -->
        <g class="city-marker"
          @click="selectRegion('Jerusalén')"
          @mouseenter="hoveredRegion = 'Jerusalén'"
          @mouseleave="hoveredRegion = null"
        >
          <circle cx="300" cy="535" r="32"
            :fill="selectedRegion === 'Jerusalén' ? '#6a1010' : '#8b1a1a'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="300" y="530" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Jerusalén</text>
          <text x="300" y="545" font-family="serif" font-size="9.5"
            fill="#ffcfcf" text-anchor="middle">Ciudad Santa</text>
        </g>
 
        <!-- Belén -->
        <g class="city-marker"
          @click="selectRegion('Belén')"
          @mouseenter="hoveredRegion = 'Belén'"
          @mouseleave="hoveredRegion = null"
        >
          <circle cx="300" cy="660" r="28"
            :fill="selectedRegion === 'Belén' ? '#321a5a' : '#4a2c7a'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="300" y="655" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Belén</text>
          <text x="300" y="670" font-family="serif" font-size="9.5"
            fill="#d4baff" text-anchor="middle">Cuna de Jesús</text>
        </g>
 
        <!-- Brújula -->
        <g transform="translate(600,80)">
          <circle cx="0" cy="0" r="22" fill="#2c1a0e" opacity="0.7"/>
          <polygon points="0,-13 5,4 0,1 -5,4" fill="#f4e9d0"/>
          <text x="0" y="19" font-family="serif" font-size="12" fill="#f4e9d0"
            text-anchor="middle" font-weight="bold">N</text>
        </g>
 
        <!-- Escala -->
        <g transform="translate(460,775)">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#4a2c0a" stroke-width="2"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#4a2c0a" stroke-width="2"/>
          <line x1="80" y1="-5" x2="80" y2="5" stroke="#4a2c0a" stroke-width="2"/>
          <text x="40" y="-8" font-family="serif" font-size="11" fill="#4a2c0a"
            text-anchor="middle">~50 km</text>
        </g>
 
        <!-- Esquinas decorativas -->
        <path d="M18,18 L50,18 M18,18 L18,50" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M662,18 L630,18 M662,18 L662,50" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M18,802 L50,802 M18,802 L18,770" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M662,802 L630,802 M662,802 L662,770" stroke="#b8934a" stroke-width="2" fill="none"/>
 
        <!-- Título del mapa -->
        <text x="340" y="792" font-family="serif" font-size="13" fill="#4a2c0a"
          text-anchor="middle" font-style="italic">Tierra Santa — Época Bíblica</text>
      </svg>
 
      <!-- Panel de info de región seleccionada -->
      <Transition name="region-fade">
        <div v-if="selectedRegion" class="region-info">
          <span class="region-info__icon">{{ regionData[selectedRegion].icon }}</span>
          <div>
            <h3>{{ selectedRegion }}</h3>
            <p>{{ regionData[selectedRegion].desc }}</p>
          </div>
        </div>
      </Transition>
 
    </div>
  </div>
</template>
 
<script src="./MapScreen.js"></script>
<style src="./MapScreen.css"></style>