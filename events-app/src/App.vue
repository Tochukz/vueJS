<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.silver-border {
  border: solid silver 1px;
  margin: 2em;
  padding: 5px;
}
.right {
  text-align: right;
  padding:5px;
}

.blue-border {
  border: solid blue 1px;
  margin: 1em;
}
</style>
