<template>
    <div id="app">
        <button @click="$router.back()">后退</button>
        <button @click="$router.forward()">前进</button>
        <button @click="go">跳转到about</button>
        <div id="nav">
            <router-link :to="{path:'/home'}">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 123123
        };
    },
    methods: {
        go() {
            this.$router.push({ path: `/about/${id}/hhh/张三` });
        }
    }
};
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
