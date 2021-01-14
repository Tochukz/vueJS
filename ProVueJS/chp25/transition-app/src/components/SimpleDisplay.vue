<template>
    <div class="mx-5 border border-dark p-2">
        <h3 class="bg-warning text-white text-center p-2">Display</h3>
        <transition>
          <div v-if="show" class="h4 bg-info text-center p-2">Hello, Chucks</div>
        </transition>
        <div class="text-white">
            <button class="btn btn-primary" v-on:click="toggle">
                Toggle Visibility
            </button>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
      return {
          show: true
      }
  },
  methods: {
      toggle() {
          this.show = !this.show;
      }
  }
}
</script>

<style>
 v.leave-action {
     opacity: 0;
     font-size: 0em;
     transition: all 250ms;
 }
 .v-enter {
     opacity: 0;
     font-size: 0em;
 }
 .v-enter-to {
     opacity: 1;
     font-size: x-large;
     transition: all 250ms;
 }
</style>