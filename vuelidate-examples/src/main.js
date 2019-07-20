import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router';
import Vuelidate from 'vuelidate';
import TreeView from "vue-json-tree-view";

Vue.use(Vuelidate);
Vue.use(TreeView);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
