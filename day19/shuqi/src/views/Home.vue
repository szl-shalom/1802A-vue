<template>
    <div class="home">
        登录
        <input type="text" v-model="user.username" />
        <input type="text" v-model="user.password" />
        <b @click="login">提交</b>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    methods: {
        login() {
            Axios.post("/api/user/login", this.user).then(result => {
                if (result.data.code) {
                    localStorage.setItem("token", result.data.token);
                } else {
                    alert("账户密码不正确");
                }
            });
        }
    },
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        };
    }
};
</script>
