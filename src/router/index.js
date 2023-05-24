// This code imports the necessary modules from the vue-router package
import { createRouter, createWebHistory } from 'vue-router'

// These lines import various components that are used as views for different routes
import HomeView from '../views/HomeView.vue'
import Register from '../components/core/Register.vue'
import ForgotPassword from '../components/core/ForgotPassword.vue'
import Settings from '../components/Settings.vue'
import Articles from '../components/Articles.vue'
import AddSkill from '../components/AddSkill.vue'
import AddExperience from '../components/AddExperience.vue'
import AddWebsite from '../components/AddWebsite.vue'
import AddDesign from '../components/AddDesign.vue'

// This array defines the routes for the application
const routes = [
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/log-in',
name: 'log-in',
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
requiresAuth: true,
}
},
{
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: {
    title: "Musunza Articles",
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
title: "Experience",
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

// This creates a new router instance, passing in the routes array and history
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

// This exports the router instance so that it can be used by other components
export default router
