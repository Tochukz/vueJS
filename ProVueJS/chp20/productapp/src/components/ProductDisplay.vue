<template>
    <div>
      <table class="table table-sm table-bordered" 
             v-bind:class="'tableClass' == useStripedTable">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th> </th>
        </tr>
        <tbody>
          <tr v-for="p in products" v-bind:key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.category }}</td>
            <td>{{ p.price }}</td>
            <td>
              <button class="btn btn-sm btn-primary" 
                      v-bind:class="editClass"
                      v-on:click="editProduct(p)">
                Edit 
              </button>
              <button class="btn btn-sm btn-danger"
                      v-bind:class="deleteClass"
                      v-on:click="deleteProduct(p)">
                  Delete
              </button>
            </td>
          </tr>
          <tr v-if="products.length == 0">
              <td colspan="5" class="text-center">No data</td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <!--
        <button class="btn btn-primary" v-on:click="createNew">
          Create New
        </button>
        -->

         <!-- TO prevent an argument from being provided to the Vuex mapped method -->
         <button class="btn btn-primary" v-on:click="createNew()">
          Create New
        </button>
        <!-- v-on:click="createNew" will pass the event object to the creatNew method -->
      </div>
    </div>
</template>

<script>
/*
export default {
    // data: function () {
    //     return {
    //       products: []
    //     }
    // },
    computed: {
      products() {
        return this.$store.state.products;
        //return this.$store.getters.filteredProducts(175);
      }
    },
    methods: {
      createNew() {
        this.$store.commit("selectProduct");
      },
      editProduct(product) {
        this.$store.commit("selectProduct", product);
      },
      deleteProduct(product) {
        //this.$store.commit("deleteProduct", product);  
        this.$store.dispatch("deleteProductAction", product);
      },       
    },
    created(){
      this.$store.dispatch("getProductsAction");
    }
}
*/

// Using map methods instead og this.$store
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["products"]),
    ...mapState({
      useStripedTable: state => state.prefs.stripedTable,
    }),
    ...mapGetters({
      tableClass: "prefs/tableClass", 
      editClass: "prefs/editClass", 
      deleteClass: "prefs/deleteClass",
    })
  },
  methods: {
    ...mapMutations({
      editProduct: "selectProduct",
      createNew: "selectProduct",
      setEditButtonColor: "prefs/setEditButtonColor", 
      setDeleteButtonColor: "prefs/setDeleteButtonColor",
    }),
    ...mapActions({
      getProducts: "getProductsAction",
      deleteProduct: "deleteProductAction",
    })
  },
  created() {
    console.log('State: ', this.$store.state.prefs.stripedTable); // State: true
    console.log('Getter: ', this.$store.getters['prefs/editClass']); // Getter: btn-secondary
    this.getProducts();
    this.setEditButtonColor(false);
    this.setDeleteButtonColor(false);
  }
}

/**
 * State data of the module is always kept separate unlike the getters, mutations and action that are merged.
 * To access the state data you use the assinged name of the module like this: state.prefs.stripedTable
 * The assigned name of the module is "prefs" in this case. 
 * 
 * If the namespace option is applied to a module then its getters, mutations and actions will be kept seperate and must be access using the 
 * a prefix which is the module key.
 */
</script>