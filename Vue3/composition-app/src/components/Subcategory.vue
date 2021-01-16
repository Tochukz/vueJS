<template>
  <div class="col-sm-2"> 
    <h5> {{ category.name }} Subcategories</h5>
    <select v-model="subCategoryId" @change="updateBooks" class="form-control" :size="subCategories.length">
      <option v-for="subCat in subCategories" :key="subCat.subcategoryId" :value="subCat.subcategoryId">
          {{ subCat.name }}
      </option>
    </select>
  </div>
  <BookList :list="books"/>
</template>

<script>
import { ref, toRefs, reactive, provide, inject, readonly} from 'vue';

import { useBookRepository } from '../composables/book-repository';
import BookList from './BookList.vue';


export default {
  name: 'Subcategories',
  props: {
    subCategories: {
      type: Array,
      required: true,
    } 
  },
  components: {
    BookList,
  },
  data() {
    return {

    }
  },
  setup(props) {
    const  subCategoryId  = ref(0);
    const { subCategories } = toRefs(props);

    subCategoryId.value = subCategories[0]? subCategories[0].subCategoryId : 0;
    
    const {subCategory, books,  getBooks} = useBookRepository(subCategoryId)
    provide('subcategory', readonly(subCategory));

    const category = inject('category', {});

    return {
      getBooks,
      subCategoryId,
      books,
      category
    }
  },
  watch: {
    subCategories(newVal, oldVal) {  
      this.subCategoryId = newVal[0].subcategoryId;      
    }
  }
}
</script>

<style>

</style>