<template>
  <div class="col-sm-12">
    <h4>Custom Collection Validation</h4>
    <form>
      <p class="bg-success" v-text="successMessage"></p>
      <div v-for="(field, index) in formFields" v-bind:key="index" class="form-group">
        <label class="control-label">{{ field.label }}</label>
        <input v-bind:type="field.type? field.type: 'text'" v-model="validationIterator[index].$model.value" class="form-control" v-bind:class="{'is-invalid': validationIterator[index].value.$invalid && validationIterator[index].value.$dirty}" />
      </div>
      <p v-text="errorMesssage" class="bg-danger"></p>
      <!--<pre>{{ this.$v.formFields.$each }} </pre>-->
      <button class="btn btn-primary" v-on:click="validateForm" type="button">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, email, requiredIf } from "vuelidate/lib/validators";
import Vue from 'vue';

export default {
  data: () => ({
    formFields: [
      {
        label: 'First Name',
        value: 'Tochukwu',
      },
      {
        label: 'Last Name',
        value: '',
      },
      {
        label: 'Email',
        value: '',
        type: 'email',
        validator: {
          email,
          required
        }
      },
      {
        label: 'City',
        value: '',
      },
      {
        label: 'Password',
        value: '',
        type: 'password'
      },
    ],
    errorMesssage: '',
    successMessage: '',
  }),
  computed: {
    validationIterator() {
      return this.$v.formFields.$each.$iter;
    },
  },
  methods: {
    validateForm() {
      this.$v.$touch();
      if(this.$v.$invalid) {
        this.errorMesssage = "Form validation failed";
        this.successMessage = " ";
        return false;
      }
      this.successMessage = "Form has been submitted";
      this.errorMesssage = "";
      return true
    }
  },
  validations: {
    formFields: {
      required,
      $each: {
        value: {
          required,
        },
      },
    },
  },
}
</script>
