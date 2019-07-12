<template>
    <div v-if="show" class="text-danger">
        <div v-for="m in messages" v-bind:key="m">{{ m }}</div>
    </div>
</template>

<script>
export default {
    props: ["validation"],
    computed: {
        show() {
            return this.validation.$dirty && this.validation.$invalid
        },
        messages() {
            let messages = [];
            if (this.validation.$dirty) {
                if (this.hasValidationError("required")) {
                    messages.push("Please enter a value")
                } else if (this.hasValidationError("email")){
                    messages.push("Please enter a valiid email address");
                }
            }
            return messages;
        }
    },
    methods: {
        hasValidationError(type) {
            return this.validation.$params.hasOwnProperty(type) && !this.validation[type];
        }
    }
}
</script>

 <!--
The Vuelidate package provides details about data validation through an object that will be received by
this component’s validation prop.
For the SportsStore application, I require two validators—the required

validator that ensures the user has provided a value and the email validator that ensures a value is a
correctly formatted e-mail address.

Vuelidate supports a wide range of validators. See https://monterail.github.io/vuelidate for details.
 -->