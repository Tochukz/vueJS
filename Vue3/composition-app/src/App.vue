<template>
  <div class="container-fluid">
    <div class="row">
      <Category />
    </div>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>
