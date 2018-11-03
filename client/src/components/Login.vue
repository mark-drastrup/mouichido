<template>
<div>
    <h1>Login</h1>

    <input		type="username"		name="username"		v-model="username"		placeholder="username"		/>
    <br>
    <input		type="password"		name="password"		v-model="password"		placeholder="password"		/>
    <br>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
</div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        async login() {
            try {
                const response = await authenticationService.login({
                    username: this.username,
                    password: this.password
                });
                this.$store.dispatch("setToken", response.data.token);
                this.$store.dispatch("setUser", response.data.user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.$store.dispatch("setUser", null);
            //navigate to homepage
            this.$router.push({
                name: "root"
            });
        }
    }
};
</script>
