<template lang="html">
  <div class="col-sm-12">
    <h3>Baisc Form</h3>
    <div class="form-group">
      <!-- <input type="text"  v-bind="name"> -->
      <label class="control-label" v-text="nameLabel"></label>
      <!-- <input class="from-control" v-model.trim="$v.name.$model" @change="updateField"/> -->
      <input class="form-control" v-model="nameInput" @change="updateField" :name="nameAttr" />
    </div>
    <!-- <div class="error" v-if="!$v.name.required">Field is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">Age</label>
      <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
    </div>
    <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
    <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view> -->
</div>
</template>

<script>
export default {
  data: () => ({
    nameLabel: 'Name',
    nameInput: '',
    nameAttr:'Amarata',
  }),
  methods: {
    updateField($event) {
      //this.nameLabel = $event.target.value;
      this.nameLabel = $event.target.name;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
