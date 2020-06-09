<template>
    <div>
        <input type="text" @keyup.enter="submit" v-model="val" />
    </div>
</template>


<script>
export default {
    methods: {
        submit() {
            if (!this.val) {
                alert("添加的数据不可以为空");
                return;
            }
            
            let obj = {
                title: this.val,
                isChecked: 0,
                id: Math.random()
                    .toString()
                    .slice(2)
            };
            // 触发自定义事件
            this.$emit("add", obj);
            // 清空数据
            this.val = "";
        }
    },
    data() {
        return {
            val: ""
        };
    }
};
</script>

// scoped 开启css模块化
<style scoped>
input {
    width: 220px;
    height: 46px;
}
</style>