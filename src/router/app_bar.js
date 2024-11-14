import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import School from '../views/School.vue';
import Location from "@/views/Location.vue";
import History from "@/views/History.vue"
import About from "@/views/About.vue";

const routes = [
    {path: '/caracusenii-vechi/', component: Home},
    {path: '/school', component: School},
    {path: '/location', component: Location},
    {path: '/history', component: History},
    {path: '/about', component: About},
    {path: '/:pathMatch(.*)*', redirect: '/caracusenii-vechi/'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
