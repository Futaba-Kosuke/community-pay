import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import firebase from '@/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
