<template>
    <div>
      <h2>Goat Component</h2>
      <button @click="transfer">Transfer Sheep</button>
      <p v-text="msg"></p>
    </div>
</template>

<script>

export default {
  data: () => ({
    msg: '',
  }),
  methods: {
      transfer() {         
          this.eventBus.$emit('transfer-sheep', 'Cool Sheep');
      }
  },
  inject: ['eventBus']
}
</script>