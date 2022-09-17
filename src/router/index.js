import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ProfilView from '../views/ProfilView.vue'
import AdminView from '../views/AdminView.vue'
import NewPostView from '../views/NewPostView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: NewPostView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 
