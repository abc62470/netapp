// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'

import './common/css/index.less'

Vue.prototype.$http = Axios

if (process.env.NODE_ENV === 'development') {
    Vue.prototype.$http.defaults.baseURL = 'http://localhost:8080/static/data';
    console.log('development----');
} else {
    Vue.prototype.$http.defaults.baseURL = 'https://abc62470.github.io/netapp/static/data';
}

Vue.config.productionTip = false

/* eslint-disable no-new */
var Vuet = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

console.log(Vuet);