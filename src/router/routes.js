import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue';
import Arts from '../pages/Arts.vue';
import Graphic from '../pages/Graphic.vue';
import Pricing from '../pages/Pricing.vue';
import Character from '../pages/Character.vue';
import Stickers from '../pages/Stickers.vue';
import SampleArts from '../pages/SampleArts.vue';

const routes = [
{
    name: 'Home',
    path: '/',
    component: Home,
},
{
    name: 'Arts',
    path: '/Arts',
    component: Arts,
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
},
{
    name: 'SampleArts',
    path: '/SampleArts',
    component: SampleArts
},
{
    name: 'Character',
    path: '/CharacterDesign',
    component: Character
},
{
    name: 'Stickers',
    path: '/Stickers',
    component: Stickers
}
]

const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router