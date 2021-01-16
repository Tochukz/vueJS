<template>
  <div class="col-sm-8">
    <div class="row">
      <div class="col-sm-12">
          <h3 class="text-center" ref="title">Books for {{ subCategory.name }} </h3>
      </div>
    </div>
    <div class="row">
      <template v-for="book in list" :key="book.bookId">
        <Book :book="book" />
      </template>
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue';

import Book from './Book.vue';

export default {
  name: 'BookList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    Book,
  },
  setup() {
    const title = ref(null);
    
    const subCategory = inject('subcategory', {});

    onMounted(() => {
      title.value.style.color = "blue";
      //console.log('title', title.value);
    });

    return {
      subCategory,
      title
    }
  }
}
</script>

<style>

</style>