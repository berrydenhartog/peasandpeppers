require('./scss/main.scss');
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
import VueMoment from 'vue-moment'
import Auth from '@aws-amplify/auth';
import Analytics from '@aws-amplify/analytics';
const moment = require('moment')

require('moment/locale/nl')

Amplify.configure(aws_exports);
//Amplify.Logger.LOG_LEVEL = 'DEBUG';

Auth.configure({
  //disable storage of cookies
  //todo: rememberMe ? localStorage : sessionStorage
  storage: window.sessionStorage
});

Analytics.configure({
});

Analytics.autoTrack('pageView', { enable: true, type: 'SPA', })

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(VueMoment, {
  moment
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('initialiseProducts');
	},
  render: h => h(App)
}).$mount('#app')
