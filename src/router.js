import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/Message.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/messages', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router