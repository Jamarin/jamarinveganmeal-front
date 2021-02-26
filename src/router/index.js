import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Recipes from "@/views/Recipes";

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: Home, meta: {requiresAuth: false, requiresAnon: false}},
        {path: '/recipes', name: 'recipes', component: Recipes, meta: {requiresAuth: false, requiresAnon: false}}
    ]
})

export default router