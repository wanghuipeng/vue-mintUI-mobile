import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/components/home')), 'home')
const mine = r => require.ensure([], () => r(require('@/components/mine')), 'mine')
const template = r => require.ensure([], () => r(require('@/components/template')), 'template')
const notFound = r => require.ensure([], () => r(require('@/components/notFound')), 'notFound')
const login = r => require.ensure([], () => r(require('@/components/login')), 'login')

Router.prototype.goBack = function() {
    this.isBack = true
    window.history.go(-1)
}

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
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/template',
            name: 'template',
            component: template
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: notFound
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '*',
            redirect: '/notFound'
        }
    ]
})