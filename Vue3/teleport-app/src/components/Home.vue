<template>
  <Base>
     <div class="row">
      <div class="col-sm-12 mt-4">
        <h3>
          <img class="navbar-brand" alt="Vue logo" src="../assets/logo.png" height="50" /> Home Page
         </h3>
        <p>Welcome to the Tochukwu enterprise.</p>
        <p>
          Want my news letter? <button class="btn btn-primary" @click="signup">Sign up</button>
        </p>
        <Modal title="News Letter Signup" :isOn="isOn" @turnOff="turnOff" />
      </div>
    </div>
  </Base>
</template>

<script>
import Base from './Base.vue';
import Modal from './Modal.vue';

export default {
  name: 'Home',
  components: {
    Base,
    Modal,
  },
  data() {
    return {
      isOn: true,
    }
  },
  methods: {
    signup() {
      this.isOn = true;      
    },
    turnOff() {
      this.isOn = false;
    }
  }
}
</script>

<style>

</style>