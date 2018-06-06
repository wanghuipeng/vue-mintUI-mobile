// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端高清适配
import 'lib-flexible/flexible.js'
// 引入mint-ui组件和样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入设置的store
import store from './store'

Vue.config.productionTip = false

Vue.use(MintUI)

import axios from "./assets/js/api";
Vue.prototype.$ajax = axios;

// 本地没有user值，重定位到登录页
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         sessionStorage.clear()
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'))
//     if (!user && to.path !== '/login') {
//         next({ path: '/login' })
//     } else {
//         next()
//     }
//     // 该账号的菜单项中无此路由名称时跳转至404页面
//     let menu = JSON.parse(sessionStorage.getItem('menu'))
//     if (menu && Object.values(menu).indexOf(to.path.substring(1)) === -1) {
//         next({ path: '/notFound' })
//     } else {
//         next()
//     }
// })

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})