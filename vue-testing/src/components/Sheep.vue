<template>
    <div>
      <h2>Sheep Component</h2>
      <p v-text="sheep"></p>
    </div>
</template>

<script>

export default {
  data: () => ({
    sheep: '...'
  }),
  methods: {
    addMessage(sheepName) {
      this.sheep = sheepName;
    }
  },
  created() {    
    this.eventBus.$on('transfer-sheep', this.addMessage); 
  },
  inject: ['eventBus'],
}
</script>