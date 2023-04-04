import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/core/Register.vue'
import ForgotPassword from '../components/core/ForgotPassword.vue'
import Settings from '../components/Settings.vue'
import AddSkill from '../components/AddSkill.vue'
import AddExperience from '../components/AddExperience.vue'
import AddWebsite from '../components/AddWebsite.vue'
import AddDesign from '../components/AddDesign.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/log-in',
    name: 'log-in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/core/LogIn.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      title: "Settings",
      requiresAuth: false,
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: AddSkill,
    meta: {
      title: "Skills",
      requiresAuth: false,
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: AddExperience,
    meta: {
      title: "Experince",
      requiresAuth: false,
    }
  },
  {
    path: '/websites',
    name: 'websites',
    component: AddWebsite,
    meta: {
      title: "Websites",
      requiresAuth: false,
    }
  },
  {
    path: '/designs',
    name: 'designs',
    component: AddDesign,
    meta: {
      title: "Designs",
      requiresAuth: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
