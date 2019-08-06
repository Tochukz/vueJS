<template>
    <div class="silver-border">
      <h2>Sister</h2>
      <div v-html="message" class="right"></div>
      <p class="right">
        <button @click="messageToBrother">Message Brother</button>
      </p>
    </div>
</template>

<script>

export default {
  data: () => ({
    message: `<p>Hello John</p>
              <p>Your truely, Jane</p>`
  }),
  methods: {
    addMessage(sheepName) {
      this.sheep = sheepName;
    },
    messageToBrother() {    
      this.eventBus.$emit('message-from-sister', this.message); 
      this.message = '';
    },
  },  
  inject: ['eventBus'],
}
</script>