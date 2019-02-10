<template>
    <h1>Title: {{ title }}</h1>
</template>

<script>
export default {
    data(){
        return {
            title: "First Single File Component"
        }
    }
}
</script>

<style scoped>
 h1{
     color: blue;
 }
</style>
