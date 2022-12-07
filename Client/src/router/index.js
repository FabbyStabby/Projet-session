import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RendezVous from '../views/RendezVous.vue'
import Login from '../views/Login.vue'
import Profil from '../views/Profil.vue'
import { useAuthedUser } from '../composables/authComposable'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rendezvous',
      name: 'Rendez-vous',
      component: RendezVous
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/profil',
      name: 'Profil',
      component: Profil
    }
  ]
});

router.beforeEach((to, from, next) =>{
  const isAuthenticated = !!JSON.parse(localStorage.getItem('user-info'))

  if (!(to.name === 'Login' || to.name === 'Home') && !isAuthenticated) {
    next({ name: 'Login' })
  } else if (isAuthenticated && to.name === 'Login') {
    next({ name: 'Home' });
  } else {
    next();
  }
})

export default router
