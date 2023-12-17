import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Documentation from "../views/Documentation.vue";
import data from '../documentation'
import { getElasticDocRoutes } from '../../'

const routes = [
    ...getElasticDocRoutes(data, Documentation),
    {
        path: "/",
        name: "Home",
        component: Home,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;