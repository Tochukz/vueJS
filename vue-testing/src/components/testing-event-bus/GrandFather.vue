<template>
  <div>
    <h3>Grandpa has {{ sons.length }} Sons</h3>
    <Father v-for="(son, index) in sons" :key="index" />
  </div>
</template>

<script>
import Father from "./Father";
import Vue from "vue";

export default {
  components: {
    Father,
  },
  data() {
    return {
      sons: [...Array(3).keys()]
    }
  },
  // provide() {
  //   return {
  //     eventBus: new Vue()
  //   }
  // }
}
</script>
