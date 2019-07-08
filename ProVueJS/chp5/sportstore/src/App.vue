<template>
  <div id="app">
    <store />
  </div>
</template>

<script>
import Store from "./components/Store";
import { mapActions } from "vuex";

export default {
  name: 'app',
  components: {
    Store
  },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
}
</script>

