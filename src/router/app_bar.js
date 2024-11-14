import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import School from '../views/School.vue';
import Location from "@/views/Location.vue";
import History from "@/views/History.vue"
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue"; // Create this component for your 404 page

const routes = [
    {path: '/caracusenii-vechi/', component: Home},
    {path: '/school', component: School},
    {path: '/location', component: Location},
    {path: '/history', component: History},
    {path: '/about', component: About},
    {path: '/:pathMatch(.*)*', component: NotFound}, // Catch-all route for 404
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
