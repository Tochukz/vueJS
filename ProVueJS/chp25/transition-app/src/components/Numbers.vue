<template>
    <div class="mx-5 p-2 border border-dark">
        <h3 class="bg-success text-white text-center p-2">Numbers</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <input class="form-control" v-model.number="first" />
                </div>
                <div class="col-1 h3">+</div>
                <div class="col">
                    <input class="form-control" v-model.number="second">
                </div>
                <div class="col h3"> = {{ total }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            first: 10,
            second: 20,
        }
    },
    computed: {
        total() {
            return this.first + this.second;
        }
    }
}
</script>