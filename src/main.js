import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/firebase'
import VueSession from 'vue-session'

// 세션관리
var sessionOptions = {
  persist: true
}

Vue.use(VueSession, sessionOptions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
