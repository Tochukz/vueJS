<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-8">
        <EditorPage />
      </div>
      <div class="col-sm-4">
        <Report msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import Report from './components/Report.vue'
import EditorPage from './components/EditorPage';

export default {
  name: 'App',
  components: {
    Report,
    EditorPage,
  }
}
</script>

<style>

</style>
