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
export default {
    data: function () {
        return {
          products: []
        }
    },
    methods: {
        createNew() {
          
        },
        editProduct(product) {
            
        },
        deleteProduct(product) {
                   
        },
       
    },
}

</script>