// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端高清适配
import 'lib-flexible/flexible.js'
// 引入mint-ui组件和样式
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import './assets/less/main.less'
// 引入设置的store
import store from './store'
// 引入faskclick库，解决移动端300s延迟问题
import fastClick from 'fastclick'
fastClick.attach(document.body)
    // 引入全局mixin
import mixin from './utils/mixin/mixin'
Vue.mixin(mixin)

Vue.config.productionTip = false


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