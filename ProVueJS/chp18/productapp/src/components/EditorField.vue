<template>
  <div class="form-group">
    <label>{{ formattedLabel }} </label>
    <input v-model.number="value" class="form-control" 
           v-bind:class="[colors.bg, colors.text]"/>
  </div>
</template>

<script>
export default {
  props: ["label"],
  data: function() {
    return {
      value: "",
      formattedLabel: this.format(this.label)
    }
  },
  inject: {
    colors: "colors",
    format: {
      from: "labelFormatter",
      default: () => (value) => `Default ${value}`
    }
  }
}
/**
 A factory function is required when you provide default values for services, which is why the value of
the default property is assigned a function that returns another function as its result. 
When Vue.js creates the component, it will invoke the default function to get the object that will be used as the service.
 *
 */
</script>

