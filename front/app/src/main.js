require('./scss/main.scss');
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cognitoAuth from './cognito'

Vue.config.productionTip = false

new Vue({
  router,
  cognitoAuth,
  store,
  render: h => h(App)
}).$mount('#app')
