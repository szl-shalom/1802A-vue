<template>
    <div id="app">
        <header class="header">
          header
        </header>
        <main class="main">
            <Banner />
        </main>
        <footer class="footer">
          footer
        </footer>
    </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
    components: {
        Banner
    }
};
</script>

<style lang="scss">
@import "@assets/scss/common.scss";
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .header {
        height: 46px;
        background: red;
    }
    .main {
        flex: 1;
    }
    .footer {
        height: 46px;
        background: tomato;
    }
}
</style>
