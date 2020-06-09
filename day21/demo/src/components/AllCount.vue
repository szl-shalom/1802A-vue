<template>
    <span>{{ allCount ? allCount : "" }}</span>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["carList"]),
        // 计算总数量
        allCount() {
            return this.carList.reduce((p, n) => p + +n.count, 0);
        }
    }
};
</script>