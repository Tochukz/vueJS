<template>
  <div id="app">
     <sheep />
     <goat />
     
  </div>
</template>

<script>

import Vue from 'vue';
import Goat from './components/Goat';
import Sheep from './components/Sheep';

export default {
  name: 'app',
  components: {
    Goat,
    Sheep
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
