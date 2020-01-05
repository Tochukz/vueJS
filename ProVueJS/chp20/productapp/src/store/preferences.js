export default {
  namespaced: true,
  state: {
    stripedTable: true,
    primaryEditButton: false,
    dangerDeleteButton: false
  },
  getters: {
    editClass(state) {
      return state.primaryEditButton ? "btn-primary" : "btn-secondary";
    },
    deleteClass(state) {
      return state.dangerDeleteButton ? "btn-danger" : "btn-secondary";
    },
    tableClass(state, payload, rootState) {
      return rootState.products.length > 0 && rootState.products[0].price > 500 ? "table-striped" : "";
    }
  },
  mutations: {
    setEditButtonColor(currentState, primary) {
      currentState.primaryEditButton  = primary;
    },
    setDeleteButtonColor(currentState, danger) {
      currentState.dangerDeleteButton = danger;
    }
  }
}

/**
 * The default behaviour for modules is to merge the getters, mutations and actions they offer into the data store. 
 * The state data is always kept seperate and must be accessed using a prefix. 
 * If you enable namespace feature, then all the getters, mutations and actions of the module must also be accessed using prefix.abnf
 * 
 * Assuiming this module is named with a key of prefs under the store index modules object like this: 
 * '''
 *  modules: {
 *   pref: preference,
 * }
 * '''
 * then the state properties, getters, mutations and action will be accessed using prefixes like this: 
 * For state properties:
 *   state.pref.stripedTable
 *   this.$store.state.prefs.stripedTable 
 * 
 * For getters:
 *   this.$store.getters['prefs/editClass']
 * 
 * For mutations: 
 *   this.$store.commit('prefs/setEditButtonColor')  
 *   context.commit('prefs/setEditButtonColor')
 * 
 * For actions: 
 *   this.$store.dispatch('prefs/ActionName')
 *   context.dispatch('prefs/ActionName');
 *   
 */