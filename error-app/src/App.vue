<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-sm-4 offset-sm-4 text-center">
         <img alt="Vue logo" src="./assets/logo.png" height="100">
      </div>
    </div>   
    <Father msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Father from './components/Father'

export default {
  name: 'App',
  components: {
    Father
  },
  errorCaptured(err, vm, info) {
    // This will only capture error from children of this component
    console.error('App captured', {err, vm, info});

     // stop propagation
    //return false;
  }
}
</script>

<style>

</style>
