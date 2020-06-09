<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <input type="checkbox" :checked="item.isChecked" @click="item.isChecked=!item.isChecked"/>
                <span>{{ item.title }}</span>
                <b @click="$emit('openDialog',item.id)">X</b>
            </li>
        </ul>
    </div>  
</template>

<script>
export default {
    props: {
        list: Array
    }
};
</script>

<style>
b{
    float: right;
}
span{
    margin-left: 10px;;
}

li{
    height: 40px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;;
}
</style>