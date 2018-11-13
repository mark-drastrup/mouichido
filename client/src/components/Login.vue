<template>
<v-form>
    <v-container grid-list-sm>
        <p class="display-2">Login</p>
        <v-layout row justify-center>
            <v-flex xs4>
                <v-text-field label="Username" v-model="username"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs4>
                <v-text-field label="Password" v-model="password" type="password"></v-text-field>
            </v-flex>
        </v-layout>

        <v-btn color="info" @click="login">Login</v-btn>
        <v-btn @click="logout">Logout</v-btn>

        <!-- <button >Login</button>
        <button @click="logout">Logout</button> -->

    </v-container>
</v-form>
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
