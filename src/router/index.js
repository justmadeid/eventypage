import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cerita-sukses',
        name: 'cerita',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CeritaSukses.vue')
    },
    {
        path: '/request-demo',
        name: 'reqdemo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ReqDemo.vue')
    },
    {
        path: '/kontak-kami',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/detail/:slug',
        props: true,
        name: 'detail',
        component: Detail
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
]

const router = new VueRouter({
    routes
})

export default router