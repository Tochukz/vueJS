<template>
    <div>
      <table class="table table-sm table-striped tableborderes">
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
              <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                Edit 
              </button>
              <button class="btn btn-sm btn-danger"
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
        <button class="btn btn-primary" v-on:click="createNew">
          Create New
        </button>
      </div>
    </div>
</template>

<script>
import Vue from "vue"
//import Axios from "axios";

//const baseUrl = "http://localhost:3500/products";

export default {
    data: function () {
        return {
          products: []
        }
    },
    methods: {
        createNew() {
           this.eventBus.$emit("create");
        },
        editProduct(product) {
            this.eventBus.$emit("edit", product);
        },
        async deleteProduct(product) {
          await this.restDataSource.deleteProduct(product);
          let index = this.products.findIndex(p => p.id == product.id);
          this.products.splice(index, 1);
        },
        processProducts(newProducts) {
          /*Vue.js has some difficulties detecting changes in arrays */
          this.products.splice(0);          
          this.products.push(...newProducts);
        },
        async processComplete(product) {
          let index = this.products.findIndex(p => p.id == product.id);
          if (index == -1) {
            await this.restDataSource.saveProduct(product);
            this.products.push(product);
          } else {
            await this.restDataSource.updateProduct(product);
            Vue.set(this.products, index, product);
          }
        }        
    },
    inject: ["eventBus", "restDataSource"],
    /*
    created() {
      Axios.get(baseUrl).then(res => {
        //console.log(`HTTP Response: ${res.status}, ${res.statusText}`);
        //console.log(`Response Data: ${res.data.length} items`);
        Axios.get(baseUrl).then(res => this.processProducts(res.data));
      });
    }
    */
    /*
    async created() {
      let data = (await Axios.get(baseUrl)).data;
      this.processProducts(data);
    }
    */
    async created() {
      this.processProducts(await this.restDataSource.getProducts());
      this.eventBus.$on("complete", this.processComplete); 
    }
}

</script>