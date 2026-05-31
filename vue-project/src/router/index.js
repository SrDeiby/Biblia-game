import { createRouter, createWebHistory } from 'vue-router'

import StartScreen from '../Components/StartScreen/StartScreen.vue'
import MapScreen from '../Components/MapScreen/MapScreen.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router