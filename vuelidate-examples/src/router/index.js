import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import CollectionValidation from '../components/CollectionValidation';
import BasicForm from '../components/BasicForm';
import CustomCollection from '../components/CustomCollection';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/collection-validation',
      component: CollectionValidation
    },
    {
      path: '/basic-form',
      component: BasicForm
    },
    {
      path: '/custom-collection',
      component: CustomCollection
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
