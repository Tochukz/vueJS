import Vue from 'vue';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';


import store from './store';
import App from './App.vue'

const connection = 'http://localhost:9000';
const options = {
  //path: ''
}
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO(connection, options),
  vuex: {
    store,
    actionPrefix: 'socket_',
    mutationPrefix: 'socket_',
  },
}));
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
