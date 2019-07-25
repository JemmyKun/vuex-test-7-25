import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;
let Bus = new Vue();
Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
