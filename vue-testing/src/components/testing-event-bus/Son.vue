<template>
    <div class="silver-border">
      <h2>Brother</h2>      
      <div v-html="message"></div>
    </div>
</template>

<script>

export default {
  data: () => ({
    message: '',
  }),
  methods: {
      displayMessage(message) {         
          this.message = message;
      }
  },
  created() {
    this.eventBus.$on('message-from-sister', this.displayMessage);
  },
  inject: ['eventBus']
}
</script>