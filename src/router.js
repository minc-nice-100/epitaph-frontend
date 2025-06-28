import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Messages from './views/Messages.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/messages', component: Messages }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;