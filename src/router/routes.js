import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue';
import Arts from '../pages/Arts.vue';
import Graphic from '../pages/Graphic.vue';
import Pricing from '../pages/Pricing.vue';

const routes = [
{
    name: 'Home',
    path: '/',
    component: Home,
},
{
    name: 'Arts',
    path: '/Arts',
    component: Arts
},
{
    name: 'Graphic',
    path: '/Graphic',
    component: Graphic
},
{
    name: 'Pricing',
    path: '/Pricing',
    component: Pricing
}
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router