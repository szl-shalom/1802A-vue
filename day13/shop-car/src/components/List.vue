<template>
    <div :class="{active:flag}">
        <dl v-for="(item,index) in list" :key="index">
            <dt>
                <img :src="item.url" alt />
            </dt>
            <dd>
                <p>{{ item.title }}</p>
                <p>{{ item.price }}</p>
                <p>
                    <button @click="changeCount(index,item.count-1)">数量-</button>
                    <span>{{ item.count }}</span>
                    <button @click="changeCount(index,item.count+1)">数量+</button>
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        list: Array,
        flag: Boolean
    },
    methods: {
        changeCount(index, count) {
            this.$bus.$emit("changeCount", index, count);
        }
    }
};
</script>

<style lang="scss">
dl {
    width: 100%;
    padding: 10px;
    display: flex;
    dt {
        width: 200px;
        img {
            width: 100%;
        }
    }
    dd {
        padding-left: 20px;
    }
}
.active {
    dl {
        width: 50%;
        padding: 10px;
        float: left;
        flex-wrap: wrap;
        dt {
            width: 100%;

            img {
                width: 100%;
            }
        }
        dd {
        }
    }
}
</style>