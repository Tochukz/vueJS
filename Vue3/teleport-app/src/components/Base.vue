<template>
  <div class="container-fluid">
    <Header />
      <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Base',
  components: {
    Header, 
    Footer,
  }
}
</script>

<style>

</style>