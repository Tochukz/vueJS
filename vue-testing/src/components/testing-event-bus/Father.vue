<template>
  <div class="blue-border">
     <Son />
     <Daughter />
  </div>
</template>

<script>
import Vue from 'vue';
import Son from './Son';
import Daughter from './Daughter';

export default {
  components: {
    Son,
    Daughter
  },
  provide() {
    return {
      eventBus: new Vue()
    }
  }
}
</script>