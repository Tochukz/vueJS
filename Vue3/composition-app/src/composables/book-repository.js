
import {onMounted, watch, computed, ref} from 'vue';

import service, {baseImageUrl} from '../service';

export const useBookRepository = function(subCategoryId) {
  const subCategory = ref({});

  const getBooks = async () => {    
    const response = await service.get(`/subcategories/${subCategoryId.value}`);
    if (response.status == 200) {
      subCategory.value = response.data;
    }
    return response;
  }
  
  const books = computed(() => {      
    if (subCategory.value.Books) {
      return subCategory.value.Books.map(book => { 
        book.img = `${baseImageUrl}/${book.img}`;
        return book;
      });
    }
    return [];
  });
  
  onMounted(getBooks);
    
  watch(subCategoryId, getBooks); 

  return {
    books,
    subCategory,
    getBooks,
  }
}