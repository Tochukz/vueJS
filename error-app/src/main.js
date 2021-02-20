import Vue from 'vue'
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

import App from './App.vue'

Vue.config.productionTip = false

// Global Vue error handler
Vue.config.errorHandler = (err, vm, info) => {
  console.error('Global Error', {err, vm, info});
}

// Global window error handler
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Window Error', {message, source, lineno, colno, error});
}

window.onload = function() {
   //trigger window error
  triggerErr();
}

function triggerErr() { 
  throw new Error('Onload Error');
}

// Error reporting using Sentry 
Sentry.init({
  Vue,
  dsn: 'https://your-public@okey.ingest.sentry.io/randon-integer',
  attachProps: true, // default=true
  logErrors: true, // default=false,
  // for performace monitoring (optional)
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,  
  tracingOptions: {
    trackComponents: true, // for tracking child components (optional)
  }
});
/**
NB: If you set logErrors to false, errors will not be logged to your development console by Vue's internal logError.
*/


new Vue({
  render: h => h(App),
}).$mount('#app')
