<template>
    <div id="app">
        {{ num }}
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
    data() {
        return {
            num: 1
        };
    },
    components: {
        HelloWorld
    },
    created() {
        this.$bus.$on("add", this.add);
    },
    methods: {
        add(a, b, c) {
            console.log(this.num++);
            console.log(a, b, c);
        }
    }
};
</script>

<style>
</style>
