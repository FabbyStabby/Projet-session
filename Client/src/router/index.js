import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RendezVous from '../views/RendezVous.vue'
import Login from '../views/Login.vue'
import Profil from '../views/Profil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },


    {
      path: '/rendezvous',
      name: 'rendez-vous',
      component: RendezVous
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/profil',
      name: 'profil',
      component: Profil
    }
  
  ]
})

export default router
