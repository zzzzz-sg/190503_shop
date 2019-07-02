import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'

import './filters'
// 加载mockServer
import './mock/mockServer'


Vue.component(Button.name, Button)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
