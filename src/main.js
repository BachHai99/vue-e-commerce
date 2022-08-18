import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import { createPinia} from 'pinia'

import createRouter from './router/index.js'

import 'primeicons/primeicons.css'

const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)

app.use(router).use(store).mount('#app')