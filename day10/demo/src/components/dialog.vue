<template>
    <div class="dialog">
        <div class="content">
            <h3>确认要删除吗</h3>
            <button @click="$emit('remove')">确认</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.dialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
}
.content {
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background: white;
    padding: 20px;
}
</style>