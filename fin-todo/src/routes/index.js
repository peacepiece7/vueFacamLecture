import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
    history: createWebHistory(),
    scrollBehavior: () => { { top: 0 } },
    routes: [
        { path: "", component: async () => await import('./Home.vue') }
    ]
});

