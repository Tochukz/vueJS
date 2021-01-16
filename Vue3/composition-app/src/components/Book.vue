<template>
  <div class="col-sm-3">
    <div class="img-thumbnail">
      <div style="height: 200px;">
        <img :src="book.img" :title="book.title" :alt="book.title" class="img-responsive" style="height: 100%"/>
      </div>
      <p>{{ book.title }}</p>
      <p>By {{ book.author }}</p>
      <p> {{  book.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
      validate(obj) {
        const props = ['bookId', 'title', 'author', 'editor', 'price', 'img', 'availability', 'details', 'pages', 'langugage' ];
        const objKeys = Object.keys(obj);
        return props.every(prop => { 
            const isThere = objKeys.includes(prop);
            if (!isThere) {
              console.error(`Book object must have ${prop} property`);
            }
            return isThere;
        });
      }
    }
  }
}
</script>

<style>

</style>