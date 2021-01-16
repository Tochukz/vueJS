<template>
  <div class="col-sm-2">
    <h3>Category</h3>
    <select v-model="categoryId" class="form-control">
      <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId"> 
          {{ category.name}}
      </option>
    </select>
  </div>
  <Subcategory :subCategories="subCategories" />
</template>

<script>
import { toRef, ref, provide, computed } from 'vue';

import { useCategoryRepository } from '../composables/category-repository';
import Subcategory from './Subcategory.vue';

export default {
  name: 'Category',
  props: {
    categoryId: {
      type: Number,
      required: false,
      defaault: 1,
    }
  },
  components: {
    Subcategory,
  },
  data() {
    return {
     
    }
  },
  setup(props, context) {
    // Warning: DO not use ES6 destructuing for props so that is does not lose its reactive nature.

    /* Use toRef if the prop in optional. Not working as expected */
    // const categoryId = toRef(props, 'categoryId');
    const categoryId = ref(1);
    const { categories, subCategories} = useCategoryRepository(categoryId);

    // Props of the context object
    const {attrs, slots, emit} = context;
    // console.log('attr', attrs);
    // console.log('slots', slots);
    // console.log('emit', emit);

    const category = computed(() => {    
      const category = categories.value.find(cat => cat.categoryId == categoryId.value);    
      return category || {name: 'Unknown'};    
    });

    provide('category', category);

    return {
      categoryId,
      categories,
      subCategories,
    }
  },
}
</script>

<style>

</style>