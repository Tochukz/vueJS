import Vue from 'vue'
import App from 'plugin-lib';
import plugin from './plugin';

Vue.config.productionTip = false
Vue.use(plugin, { time: new Date().toISOString()});

console.log('app', App);
new Vue({
  render: h => h(App),
}).$mount('#app')
