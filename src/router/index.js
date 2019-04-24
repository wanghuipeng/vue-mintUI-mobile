import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const demo = r => require.ensure([], () => r(require('@/views/demo/index')), 'demo')
const notFound = r => require.ensure([], () => r(require('@/views/notFound')), 'notFound')
const offline = r => require.ensure([], () => r(require('@/views/offline')), 'offline')

Vue.use(Router)

export default new Router({
    scrollBehavior: (to, from, savedPosition) => ({
        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(savedPosition.x, savedPosition.y)
            }, 200)
        }
    }),
    routes: [{
            path: '/',
            name: 'index',
            component: home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/demo',
            name: 'demo',
            component: demo
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: notFound
        },
        {
            path: '/offline',
            name: 'offline',
            component: offline
        },
        {
            path: '*',
            redirect: '/notFound'
        }
    ]
})