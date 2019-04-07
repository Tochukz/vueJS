<template>
  <div class="blog">
    <h1>{{title}}</h1>
    <p>VueJS is a fun JavaScript frontend library</p>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style scoped>
</style>
