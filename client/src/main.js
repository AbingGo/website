// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App'
import router from './router'

Vue.use(elementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
