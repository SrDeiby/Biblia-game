import { createRouter, createWebHistory } from 'vue-router'

import StartScreen from '../Components/StartScreen/StartScreen.vue'
import MapScreen from '../Components/MapScreen/MapScreen.vue'
import GameScreen from '../Components/GameScreen/GameScreen.vue'



const routes = [
  {
    path: '/',
    name: 'start',
    component: StartScreen
  },
  {
    path: '/map',
    name: 'map',
    component: MapScreen
  },
{ path: '/game/:region', name: 'game', component: GameScreen }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router