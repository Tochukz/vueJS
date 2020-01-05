import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

import PrefsModule from "./preferences";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500/products/";

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    selectedProduct: null,
  },
  modules: {
    prefs: PrefsModule
  },
  mutations: {
    saveProduct(currentState, product) {
      let index = currentState.products.findIndex(p => p.id == product.id);
      if (index == -1) {
        currentState.products.push(product);
      } else {
        Vue.set(currentState.products, index, product);
      }
    },
    deleteProduct(currentState, product) {
      let index = currentState.products.findIndex(p => p.id == product.id);
      currentState.products.splice(index, 1);  
    },
    selectProduct(currentState, product) {
      currentState.selectedProduct = product;
    }
  },
  getters: {
    orderedProducts(state) {
      return state.products.concat().sort((p1, p2) => p2.price - p1.price);
    }, //providing argument to a getter
    filteredProducts(state, getters) {
      return (amount) => getters.orderedProducts.filter(p => p.price > amount);
    }
  },
  actions: {
    async getProductsAction(context) {
      (await Axios.get(baseUrl)).data
        .forEach(p => context.commit("saveProduct", p));
    },
    async saveProductAction(context, product) {
      let index = context.state.products.findIndex(p => p.id == product.id);
      if (index == -1) {
        await Axios.post(baseUrl, product);
      } else {
        await Axios.put(`${baseUrl}${product.id}`, product);
      }
      context.commit("saveProduct", product);
    },
    async deleteProductAction(context, product) {
      await Axios.delete(`${baseUrl}${product.id}`);
      context.commit("deleteProduct", product);
    }
  }
});

/**
 * To receive an argument a getter must return a function, which will be invoked when the getter is read 
 * and provided with the argument by the component.
 * 
 * The strict configuration property enforces the seperation bwtween state and operation. The helps us to avoid accidental direct 
 * changes to the state properties. If we make changes to the state property while on strict, Vuex wil throw an error.
 * The strict option should only be used during development because it relies on expensive operations that may hinder the 
 * perforance of an application. 
 * 
 * Vuex getters feature is the equivalent of a computed property in a component. 
 * Getters should not make changes to the data in the store. It is for the reason that the concat method was used before the sort method. 
 * The sort method sorts an array in place. The concat method generated a new array and ensures that reading the value of the getter doesn't cause change in the store's data.  
 * 
 */