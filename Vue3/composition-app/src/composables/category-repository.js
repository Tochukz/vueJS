
import { ref, onMounted,  computed } from 'vue';

import service from '../service';

export const useCategoryRepository = function(categoryId) {
  const categories = ref([]);
  const getCategories = async () => {
    try {
      const response = await service.get('/categories');
      if (response.status == 200) {
        categories.value = response.data;         
      }
      return response;
    } catch(err) {
      console.error(err);
    }    
  }
  const subCategories = computed(() => {
    const cat = categories.value.find(cat => cat.categoryId == categoryId.value);
    const subCats =  cat? cat.Subcategories : [];    
    return subCats;
  });

  onMounted(getCategories);

  return {
    categoryId,
    categories,
    subCategories,
  }
}