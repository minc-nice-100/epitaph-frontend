import { createRouter, createWebHistory } from "vue-router";
import MainView from "./views/MainView.vue";
import HomeView from "./views/HomeView.vue";

const routes = [
    {
        path: "/",
        component: MainView,
        children: [
            { path: "", component: HomeView },
            {
                path: "messages",
                component: () => import("./views/Messages.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
