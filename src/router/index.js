import VueRouter from 'vue-router'
import Home from '@/views/Home'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: Home, meta: {requiresAuth: false, requiresAnon: false}}
    ]
})

export default router