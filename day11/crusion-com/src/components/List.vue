<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" 
            :key="index">
                {{ item.title }} 
                <List :list="item.children"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    name:"List"
};
</script>

<style>
</style>