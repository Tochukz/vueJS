import Vue from 'vue';
import App from './App.vue';
import router from './router';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'popmotion/dist/popmotion.global.min.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
