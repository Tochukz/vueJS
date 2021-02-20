<template> 
  <div class="row">
    <div class="col-sm-12">
      <h3>Father Component</h3>
      <button class="btn btn-primary" @click="triggeFather">Trigger Father Error</button>
      <Son />
    </div>
  </div>
</template>

<script>
import Son from './Son';

export default {
  name: 'Father',
  components: {
     Son,
  },
  methods: {
    triggeFather() {
      throw new Error("Father component error");
    }
  },
  errorCaptured(err, vm, info) {
    // This will only capture error from children of this component
    console.error('Father captured', {err, vm , info});

    // stop propagation
    // return false;
  }
}
</script>

<style>

</style>