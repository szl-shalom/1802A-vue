<template>
    <div class="home">
        <div v-if="flag">
            {{ user.username }}
            <button @click="quit">退出</button>
        </div>
        <form action v-else>
            <input type="text" v-model="user.username" />
            <input type="text" v-model="user.password" />
            <button type="button" @click="login">提交</button>
        </form>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data() {
        return {
            user: {
                password: "",
                username: ""
            },
            flag: false
        };
    },
    methods: {
        login() {
            Axios.post("/api/user/login", this.user).then(res => {
                if (res.data.code) {
                    localStorage.setItem("token", res.data.token);
                    this.flag = true;
                } else {
                    alert("账户密码不正确");
                }
            });
        },
        quit() {
            localStorage.removeItem("token");
            this.flag = false;
        }
    },
    created() {
        this.flag = localStorage.getItem("token") ? true : false;
        this.user.username = this.flag ? localStorage.getItem("token") : "";
    }
};
</script>