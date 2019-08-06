import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import Father from '../components/testing-event-bus/Father';
import GrandFather from '../components/testing-event-bus/GrandFather';

Vue.use(VueRouter);



export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/father',
      component: Father
    }, 
    {
      path: '/grand-father',
      component: GrandFather
    }
  ]
});