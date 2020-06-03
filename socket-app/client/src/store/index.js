import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    messages: ['Place holder'],
  },
  getters: {
    messages: state => state.messages,
  },
  mutations: {
    socket_chatMessage(state, msg) {
        Vue.set(state.messages, state.messages.length, msg);
    }
  },
  actions: {

  }
});