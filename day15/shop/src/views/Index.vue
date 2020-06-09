<template>
    <div class="index">
        <div class="header-nav">
            <router-link to="/index/recommend" tag="b">推荐</router-link>
            <router-link to="/index/society" tag="b">社会</router-link>
        </div>
        <!-- 二级路由出口 -->
        <div class="list">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
.index {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.list {
    height: 100%;
    overflow: hidden;
    flex-grow: 1;
}
.header-nav {
    line-height: 30px;
    height: 30px;
    b {
        padding: 0 10px;
    }
}
</style>