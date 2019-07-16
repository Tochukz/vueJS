import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  provide: () => ({
    eventBus: new Vue()
  })
}).$mount('#app')
