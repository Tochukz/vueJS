<template>
  <div class="row">
    <div class="col-sm-12 text-center">
      <h1>Home</h1>
    </div>
    <div v-for="product in products" v-bind:key="product.productId" @click="showDetails(product.productId)" class="col-sm-4 text-center" style="cursor: pointer">
      <div><img v-bind:src="product.image" /></div>
      <h4>{{product.productTitle}}</h4>
    </div>
  </div>
</template>

<script>
import products from '@/data/products'

export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      products: products,
    }
  },
  methods: {
    showDetails(id) {
      this.$router.push(
              {
                name: 'productdetails',
                params: {
                    productId: id
                }
              }
            )
    }
  }
}
</script>

<style scoped>
</style>
