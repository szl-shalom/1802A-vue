<!--
 * @Descripttion: 
 * @version: 
 * @Author: 张帅虎
 * @Date: 2020-06-04 19:53:28
 * @LastEditors: 张帅虎
 * @LastEditTime: 2020-06-05 10:33:22
--> 
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
   
}
.router-link-exact-active,
.router-link-active {
    color: white;
}
</style>