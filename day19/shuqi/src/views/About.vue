<template>
    <div class="about">

        <dl class="book" v-for="(obj,index) in bookList" :key="index">
            <dt>
                <img :src="obj.url" alt />
            </dt>
            <dd>
                <h4>{{ obj.title }}</h4>
                <p>{{ obj.name }}</p>
                <p>连载654万字</p>
                <p>已完结</p>
                <button @click="$store.state.bookList.splice(index,1)">删除</button>
            </dd>
        </dl>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["bookList"])
    },
    created() {
        console.log(this.bookList);
    }
};
</script>

<style lang="scss">
  .about{
    display: flex;
    flex-wrap: wrap;
  }
</style>
