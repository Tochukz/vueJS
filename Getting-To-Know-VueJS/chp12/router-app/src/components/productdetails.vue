<template>
    <div class="details">
        <div class="container">
         <h1 class="text-primary text-center">{{product.productTitle}}</h1>
         <div><img :src="product.image" /></div>
        </div>
    </div>
</template>

<script>
import products from '@/data/products/'

export default {
    name: 'productdetails',
    data() {
        return {
            title: "Product Details",
            product: products.find(product => product.productId == this.$route.params.productId)
        }
    }
}
</script>