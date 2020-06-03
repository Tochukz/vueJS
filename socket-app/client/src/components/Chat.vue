<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card text-white bg-info mb-3">
            <div class="card-header">Chat App Vue.js Client</div>
            <div class="card-body">
                <h4 class="card-title">{{ title }}</h4>
                <p  v-show="connected" class="bg-success">:: Connected</p>
                <div class="card-text" id="content">
                  <p v-for="(msg, index) in messages" :key="index"> 
                    {{ msg }}
                  </p>
                </div>
                <form class="form" @submit.prevent="sendMessage">
                    <div class="form-group">
                        <textarea class="form-control" id="message" v-model="message"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary form-control" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-sm-6 bg-info">
      <h4>Messages from Vuex Store</h4>
      <div>
        <p v-for="(msg, index) in storeMessages" :key="index">
          {{ msg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Chat',
  props: {
    title: {
      type: String, 
      required: false,
      default: 'No title'
    }
  },
  data() {
    return {
      message: '',
      messages: [],
      connected: false,
    }
  },
  computed: {
    storeMessages() {
      return this.$store.getters['messages'];
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chatMessage', this.message);
      this.message = '';
    }
  },
  sockets: {
    // Methods of sockets object are not working
    connect() {
      this.connected = true;
      console.log('Connected!')
    },
    disconnect() {
      this.connected = false;
    },
    chatMessage(msg) {
      console.log('chat msg', msg);
      Vue.set(this.messages, this.messages.length, msg);
    }
  },
  created() {
    this.sockets.listener.subscribe('chatMessage', msg => {
      Vue.set(this.messages, this.messages.length, msg);
      console.log('new message', msg);
    });
    console.log('socket', this.sockets);
    console.log('$socket', this.$socket);
  }
}
</script>

<style scoped>

</style>
