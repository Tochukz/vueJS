import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css';
import { RestDataSource } from "./restDataSource";

new Vue({
  render: h => h(App),
  data: {
    eventBus: new Vue()
  },
  provide: function() {
    return {
      eventBus: this.eventBus,
      restDataSource: new RestDataSource(this.eventBus)
    };
  },
}).$mount('#app');

/**
 * The properties that define services cannot refer to other services 
 * So a data property that created the event bus was defined and used in the RestDataSource initialization.
 */