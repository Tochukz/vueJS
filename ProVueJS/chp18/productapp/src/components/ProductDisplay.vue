<template>
    <div>
      <table class="table table-sm table-striped tableborderes">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th> </th>
        </tr>
        <tbody>
          <tr v-for="p in products" v-bind:key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.price }}</td>
            <td>
              <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                Edit 
              </button>
            </td>
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

export default {
    data: function () {
        return {
            products: [
                { 
                    id: 1, 
                    name: "Kayak", 
                    price: 275 
                },
                { 
                    id: 2, 
                    name: "Lifejacket", 
                    price: 48.95 
                },
                { 
                    id: 3, 
                    name: "Soccer Ball", 
                    price: 19.50 
                },
                { 
                    id: 4, 
                    name: "Corner Flags", 
                    price: 39.95 
                },
                { 
                    id: 5, 
                    name: "Stadium", 
                    price: 79500 
                }
            ]
        }
    },
    filters: {
        currency(value) {
            return `$${value.toFixed(2)}`;
        }
    },
    methods: {
        createNew() {
           this.eventBus.$emit("create");
        },
        editProduct(product) {
            this.eventBus.$emit("edit", product);
        },
        processComplete(product) {
          let index = this.products.findIndex(p => p.id == product.id);
          if (index == -1) {
            this.products.push(product);
          } else {
            Vue.set(this.products, index, product);
          }
        }
    },
    inject: ["eventBus"],
    created() {
      this.eventBus.$on("complete", this.processComplete);
    }

}

/**
One drawback of the event bus model is that you must ensure that event names are unique within
the application so that the meaning of events is not confused. 
If your application becomes too large to allow easy management of event names, 
then you should consider the shared state approach.
*/
</script>