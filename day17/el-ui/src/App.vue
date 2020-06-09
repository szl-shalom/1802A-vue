<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script>
import Banner from "./components/Banner";
export default {
    data() {
        return {
            input: "",
            num: 1
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    },
    components: {
        Banner
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    width: 120px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    overflow: auto;
}

body > .el-container {
    margin-bottom: 40px;
}
.el-container {
    height: 100%;
    overflow: auto;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
