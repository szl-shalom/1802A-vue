<template>
    <div class="dialog">
        <div class="content">
            <b @click="$emit('changeIsDialogShow')">X</b>
            <img src="@/assets/logo.png" alt />
        </div>
    </div>
</template>


<style lang="scss">
.dialog {
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    top:0;
    left:0;
    .content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        b{
            float: right;
        }
    }
}
</style>