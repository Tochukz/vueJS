<template lang="html">
    <div class="col-sm-12">
      <h2>Collection Validation</h2>
      <div v-for="(v, index) in $v.people.$each.$iter" v-bind:key="index">
        <div class="form-group">
          <label class="control-label">Name for {{ index }}</label>
          <input  class="form-control" :class="{'is-invalid': v.$error}" v-model.trim="v.name.$model"/>
        </div>
        <div class="invalid-feedback" v-if="!v.name.required">Name is required.</div>
        <div class="invalid-feedback" v-if="!v.name.minLength">Name must have at least {{ v.name.$params.minLength.min }} letters.</div>
      </div>
      <div>
        <button class="btn btn-success" @click="people.push({name: ''})">Add</button> &nbsp;
        <button class="btn btn-warning" @click="people.pop()">Remove</button>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.people.$error }"></div>
      <div class="invalid-feedback" v-if="!$v.people.minLength">List must have at least {{ $v.people.$params.minLength.min }} elements.</div>
      <div class="invalid-feedback" v-else-if="!$v.people.required">List must not be empty.</div>
      <div class="invalid-feedback" v-else-if="$v.people.$error">List is invalid.</div>
      <button class="btn btn-success" @click="$v.people.$touch">$touch</button> &nbsp;
      <button class="btn btn-danger" @click="$v.people.$reset">$reset</button>
      <pre>{{$v.people}}</pre>
      <tree-view :data="$v.people" :options="{rootObjectKey: '$v.people', maxDepth: 2}"></tree-view>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      people: [
        {
          name: 'John'
        },
        {
          name: ''
        }
      ]
    }
  },
  validations: {
    people: {
      required,
      minLength: minLength(3),
      $each: {
        name: {
          required,
          minLength: minLength(2)
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
