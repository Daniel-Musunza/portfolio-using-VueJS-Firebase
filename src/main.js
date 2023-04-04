import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style1.css'
import '@/assets/style2.css'
import '@/assets/style3.css'
import '@/assets/style4.css'

createApp(App).use(store).use(router).mount('#app')
