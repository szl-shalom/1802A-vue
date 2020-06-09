<template>
    <div id="app">
        <List :list="list"/>
    </div>
</template>

<script>
import List from "./components/List";

export default {
    components: {
        List
    },
    data() {
        return {
            list: [
                {
                    title: "item-1",
                    children: [
                        {
                            title: "item-1-1",
                            children: [
                                {
                                    title: "item-1-1-1",
                                    children:[{
                                        title:"item-1-1-1-1"
                                    },{
                                        title:"item-1-1-1-2"
                                    }]
                                },
                                {
                                    title: "item-1-1-2"
                                },
                                {
                                    title: "item-1-1-3"
                                }
                            ]
                        },
                        {
                            title: "item-1-2",
                            children: [
                                {
                                    title: "item-1-2-1"
                                },
                                {
                                    title: "item-1-2-2"
                                },
                                {
                                    title: "item-1-2-3"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "item-2",
                    children: [
                        {
                            title: "item-2-1",
                            children: [
                                {
                                    title: "item-2-1-1"
                                },
                                {
                                    title: "item-2-1-2"
                                },
                                {
                                    title: "item-2-1-3"
                                }
                            ]
                        },
                        {
                            title: "item-2-2",
                            children: [
                                {
                                    title: "item-2-2-1"
                                },
                                {
                                    title: "item-2-2-2"
                                },
                                {
                                    title: "item-2-2-3"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    created() {
        console.log(this.list)
    },
};
</script>

<style>
</style>
