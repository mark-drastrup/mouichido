<template>
<v-form class="pt-5">
    <v-container grid-list-sm>
        <p class="display-2">Sign Up</p>
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

        <v-btn color="info" @click="signUp">Sign Up!</v-btn>

    </v-container>
</v-form>
</template>

<script>
import authenticationService from "@/services/authenticationService";
export default {
  name: "Signup",
  data() {
    return {
			username: "",
			password: ""
    };
	},
	methods: {
		async signUp() {
			try {
				const response = await authenticationService.register({
					username: this.username,
					password: this.password
				});
				this.$store.dispatch("setToken", response.data.token);
                this.$store.dispatch("setUser", response.data.user);
                this.$router.push({
                    name: "Review"
                });
			} catch (error) {
				this.error = error.response.data.error;
			}
			
		}
	}
};
</script>

