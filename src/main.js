import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'
import router from '@/router'

import store from '@/store'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
