<template>
  <div class="map-screen">

    <div class="title-container">
      <h1>Selecciona una Región</h1>
      <p>Escoge una región del mapa para comenzar tu desafío bíblico.</p>
    </div>

    <div class="map-wrapper">

      <svg
        class="map-svg"
        viewBox="0 0 1000 580"
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

        <!-- Fondo pergamino -->
        <rect x="0" y="0" width="1000" height="580" fill="#e8d5a8" rx="16"/>
        <rect x="8" y="8" width="984" height="564" fill="#d4ba82" rx="12"
          stroke="#b8934a" stroke-width="2" fill-opacity="0.25"/>

        <!-- Mar Mediterráneo -->
        <path d="M8,8 L200,8 L195,60 L185,150 L188,260 L195,370 L205,460 L220,530 L260,572 L8,572 Z"
          fill="url(#seaGrad)" opacity="0.9"/>
        <text x="110" y="300" font-family="serif" font-size="13" fill="#2a5a7a"
          text-anchor="middle" transform="rotate(-90,110,300)">Mar Mediterráneo</text>

        <!-- Masa de tierra -->
        <path d="M195,60 L680,55 L700,100 L710,200 L700,310 L680,420 L650,500 L600,555 L500,572 L380,568 L280,555 L240,500 L220,420 L205,310 L188,200 L185,100 Z"
          fill="#c9b87a" stroke="#a89050" stroke-width="1.5"/>

        <!-- Panel derecho: leyenda -->
        <rect x="730" y="30" width="248" height="520" fill="#d4ba82" rx="10" opacity="0.5" stroke="#b8934a" stroke-width="1"/>
        <text x="854" y="65" font-family="serif" font-size="15" fill="#4a2c0a"
          text-anchor="middle" font-weight="bold">Regiones</text>
        <line x1="750" y1="75" x2="960" y2="75" stroke="#b8934a" stroke-width="1" opacity="0.6"/>

        <!-- Leyenda items -->
        <circle cx="765" cy="110" r="10" fill="#5a6b2e"/>
        <text x="785" y="115" font-family="serif" font-size="13" fill="#2c1a0e">Galilea</text>
        <text x="785" y="130" font-family="serif" font-size="10" fill="#6a5a3a">Región Norte</text>

        <circle cx="765" cy="165" r="10" fill="#7a4a1e"/>
        <text x="785" y="170" font-family="serif" font-size="13" fill="#2c1a0e">Nazaret</text>
        <text x="785" y="185" font-family="serif" font-size="10" fill="#6a5a3a">Tierra de Jesús</text>

        <circle cx="765" cy="220" r="10" fill="#8b1a1a"/>
        <text x="785" y="225" font-family="serif" font-size="13" fill="#2c1a0e">Jerusalén</text>
        <text x="785" y="240" font-family="serif" font-size="10" fill="#6a5a3a">Ciudad Santa</text>

        <circle cx="765" cy="275" r="10" fill="#4a2c7a"/>
        <text x="785" y="280" font-family="serif" font-size="13" fill="#2c1a0e">Belén</text>
        <text x="785" y="295" font-family="serif" font-size="10" fill="#6a5a3a">Cuna de Jesús</text>

        <line x1="750" y1="315" x2="960" y2="315" stroke="#b8934a" stroke-width="1" opacity="0.4"/>
        <text x="854" y="345" font-family="serif" font-size="11" fill="#6a4a2a"
          text-anchor="middle" font-style="italic">Haz clic en una región</text>
        <text x="854" y="360" font-family="serif" font-size="11" fill="#6a4a2a"
          text-anchor="middle" font-style="italic">del mapa para jugar</text>

        <!-- Brújula -->
        <g transform="translate(854,440)">
          <circle cx="0" cy="0" r="26" fill="#2c1a0e" opacity="0.75"/>
          <polygon points="0,-16 6,5 0,1 -6,5" fill="#f4e9d0"/>
          <text x="0" y="22" font-family="serif" font-size="13" fill="#f4e9d0"
            text-anchor="middle" font-weight="bold">N</text>
        </g>

        <!-- Escala -->
        <g transform="translate(790,500)">
          <line x1="0" y1="0" x2="90" y2="0" stroke="#4a2c0a" stroke-width="2"/>
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#4a2c0a" stroke-width="2"/>
          <line x1="90" y1="-5" x2="90" y2="5" stroke="#4a2c0a" stroke-width="2"/>
          <text x="45" y="-8" font-family="serif" font-size="11" fill="#4a2c0a"
            text-anchor="middle">~50 km</text>
        </g>

        <!-- Río Jordán -->
        <path d="M580,70 Q588,140 585,210 Q580,280 575,350 Q568,420 558,480 Q550,520 542,555"
          fill="none" stroke="#6aabcc" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
        <text x="612" y="310" font-family="serif" font-size="11" fill="#2a5a7a"
          text-anchor="middle" transform="rotate(88,612,310)">Río Jordán</text>

        <!-- Mar de Galilea -->
        <ellipse cx="597" cy="175" rx="38" ry="50" fill="#6aabcc" opacity="0.9"/>
        <text x="597" y="172" font-family="serif" font-size="9.5" fill="#0d3a52" text-anchor="middle">Mar de</text>
        <text x="597" y="185" font-family="serif" font-size="9.5" fill="#0d3a52" text-anchor="middle">Galilea</text>

        <!-- Mar Muerto -->
        <ellipse cx="588" cy="462" rx="30" ry="48" fill="#5a9ab0" opacity="0.75"/>
        <text x="588" y="459" font-family="serif" font-size="9" fill="#0d2d3a" text-anchor="middle">Mar</text>
        <text x="588" y="471" font-family="serif" font-size="9" fill="#0d2d3a" text-anchor="middle">Muerto</text>

        <!-- REGIONES CLICABLES -->

        <!-- Galilea -->
        <path class="region-area" :class="{ 'region-active': hoveredRegion === 'Galilea' }"
          d="M200,65 L640,60 L655,130 L645,215 L590,210 L582,135 L540,90 L280,75 Z"
          fill="#5a6b2e" opacity="0.3" stroke="#6a7d36" stroke-width="1.5"
          @click="selectRegion('Galilea')"
          @mouseenter="hoveredRegion = 'Galilea'"
          @mouseleave="hoveredRegion = null"/>

        <!-- Nazaret -->
        <ellipse class="region-area" :class="{ 'region-active': hoveredRegion === 'Nazaret' }"
          cx="370" cy="215" rx="90" ry="62"
          fill="#7a4a1e" opacity="0.28" stroke="#9a5e28" stroke-width="1.5"
          @click="selectRegion('Nazaret')"
          @mouseenter="hoveredRegion = 'Nazaret'"
          @mouseleave="hoveredRegion = null"/>

        <!-- Jerusalén -->
        <path class="region-area" :class="{ 'region-active': hoveredRegion === 'Jerusalén' }"
          d="M240,330 L570,325 L585,390 L565,435 L520,410 L460,408 L420,435 L370,428 L310,408 L255,425 L228,385 Z"
          fill="#c9922a" opacity="0.28" stroke="#d4a030" stroke-width="1.5"
          @click="selectRegion('Jerusalén')"
          @mouseenter="hoveredRegion = 'Jerusalén'"
          @mouseleave="hoveredRegion = null"/>

        <!-- Belén -->
        <ellipse class="region-area" :class="{ 'region-active': hoveredRegion === 'Belén' }"
          cx="400" cy="490" rx="80" ry="52"
          fill="#4a2c7a" opacity="0.28" stroke="#6a3e9a" stroke-width="1.5"
          @click="selectRegion('Belén')"
          @mouseenter="hoveredRegion = 'Belén'"
          @mouseleave="hoveredRegion = null"/>

        <!-- Montañas -->
        <path d="M240,280 L258,248 L276,280 Z" fill="#b09060" opacity="0.5"/>
        <path d="M270,300 L292,262 L314,300 Z" fill="#b09060" opacity="0.45"/>
        <path d="M630,300 L648,268 L666,300 Z" fill="#b09060" opacity="0.4"/>
        <path d="M248,370 L264,342 L280,370 Z" fill="#9a7a4a" opacity="0.45"/>

        <!-- Caminos -->
        <path d="M370,215 Q380,270 390,330" fill="none" stroke="#a08040"
          stroke-width="1.5" stroke-dasharray="6,5" opacity="0.6"/>
        <path d="M390,380 Q394,430 400,445" fill="none" stroke="#a08040"
          stroke-width="1.5" stroke-dasharray="6,5" opacity="0.6"/>

        <!-- MARCADORES -->

        <!-- Galilea -->
        <g class="city-marker"
          @click="selectRegion('Galilea')"
          @mouseenter="hoveredRegion = 'Galilea'"
          @mouseleave="hoveredRegion = null">
          <circle cx="500" cy="112" r="30"
            :fill="selectedRegion === 'Galilea' ? '#3d4d1a' : '#5a6b2e'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="500" y="108" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Galilea</text>
          <text x="500" y="122" font-family="serif" font-size="9"
            fill="#d4e8a0" text-anchor="middle">Región Norte</text>
        </g>

        <!-- Nazaret -->
        <g class="city-marker"
          @click="selectRegion('Nazaret')"
          @mouseenter="hoveredRegion = 'Nazaret'"
          @mouseleave="hoveredRegion = null">
          <circle cx="370" cy="213" r="30"
            :fill="selectedRegion === 'Nazaret' ? '#5a3010' : '#7a4a1e'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="370" y="209" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Nazaret</text>
          <text x="370" y="223" font-family="serif" font-size="9"
            fill="#f0d4a8" text-anchor="middle">Tierra de Jesús</text>
        </g>

        <!-- Jerusalén -->
        <g class="city-marker"
          @click="selectRegion('Jerusalén')"
          @mouseenter="hoveredRegion = 'Jerusalén'"
          @mouseleave="hoveredRegion = null">
          <circle cx="380" cy="378" r="32"
            :fill="selectedRegion === 'Jerusalén' ? '#6a1010' : '#8b1a1a'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="380" y="373" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Jerusalén</text>
          <text x="380" y="387" font-family="serif" font-size="9"
            fill="#ffcfcf" text-anchor="middle">Ciudad Santa</text>
        </g>

        <!-- Belén -->
        <g class="city-marker"
          @click="selectRegion('Belén')"
          @mouseenter="hoveredRegion = 'Belén'"
          @mouseleave="hoveredRegion = null">
          <circle cx="400" cy="490" r="30"
            :fill="selectedRegion === 'Belén' ? '#321a5a' : '#4a2c7a'"
            stroke="#f4e9d0" stroke-width="2.5"/>
          <text x="400" y="486" font-family="serif" font-size="12" font-weight="bold"
            fill="#fff" text-anchor="middle">Belén</text>
          <text x="400" y="500" font-family="serif" font-size="9"
            fill="#d4baff" text-anchor="middle">Cuna de Jesús</text>
        </g>

        <!-- Esquinas -->
        <path d="M16,16 L46,16 M16,16 L16,46" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M984,16 L954,16 M984,16 L984,46" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M16,564 L46,564 M16,564 L16,534" stroke="#b8934a" stroke-width="2" fill="none"/>
        <path d="M984,564 L954,564 M984,564 L984,534" stroke="#b8934a" stroke-width="2" fill="none"/>

        <text x="430" y="572" font-family="serif" font-size="12" fill="#4a2c0a"
          text-anchor="middle" font-style="italic">Tierra Santa — Época Bíblica</text>

      </svg>

      <!-- Panel info -->
      <Transition name="region-fade">
        <div v-if="selectedRegion" class="region-info">
          <span class="region-info__icon">{{ regionData[selectedRegion].icon }}</span>
          <div class="region-info__text">
            <h3>{{ selectedRegion }}</h3>
            <p>{{ regionData[selectedRegion].desc }}</p>
          </div>
          <button class="region-info__btn" @click="goToGame">¡Jugar aquí! →</button>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script src="./MapScreen.js"></script>
<style src="./MapScreen.css"></style>