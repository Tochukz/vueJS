<template>
  <teleport to="body">
    <div class="modal" :class="{'d-none': !isOn}">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <SignupForm />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="close">Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import SignupForm from './SignupForm.vue';

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Modal Title'
    },
    isOn: {
      type: Boolean,
      required: true,
    }
  },
  components: {
    SignupForm
  },
  methods: {
    close() {
      this.$emit('turnOff');
    }
  },
  watch: {
    isOn(newVal, oldVal) {    
      this.hide = newVal;
    }
  }
}
</script>

<style lang="scss" scoped>  
.modal {
  background: rgba(0, 0, 0, 0.7);  
  display: block;
  .modal-dialog {
    top: 20vh;
  }
}

</style>