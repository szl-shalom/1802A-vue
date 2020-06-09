<template>
    <div class="home">
        <form action>
            <input type="text" placeholder="请输入账户" v-model="user.username" />
            <input type="text" placeholder="请输入密码" v-model="user.password" />
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
                username: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            Axios.post("/api/user/login", this.user).then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style lang="scss">
form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    input,
    button {
        height: 46px;
        margin: 10px 0;
    }
}
</style>
