import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Editor from "vue3-editor"
import store from './store'
import '@/assets/style1.css'
import '@/assets/style2.css'
import '@/assets/style3.css'
import '@/assets/style4.css'

createApp(App).use(store).use(router).use(Vue3Editor).mount('#app')
