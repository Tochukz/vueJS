<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Son Component</h4>
      <p>
        <button class="btn btn-primary" @click="triggerSon">Trigger Son Error</button>
      </p>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'Son',
  methods: {
    triggerSon() {
      throw new Error("Son Component Error");    
    },   
  },
  errorCaptured(err, vm, info) {
    // This will only capture error from children of this component. In this case there is none
    console.error('Son Captured', {err, vm, info});
   
  },
}
</script>

<style>

</style>