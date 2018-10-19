<template>
	<div>
		<h1>Login</h1>

		<input
			type="username"
			name="username"
			v-model="username"
			placeholder="username"
		/>
		<br>
		<input
			type="password"
			name="password"
			v-model="password"
			placeholder="password"
		/>
		<br>
		<button
		 @click="login">Login</button>
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
			const reponse = await authenticationService.login({
				username: this.username,
				password: this.password
			});
			console.log(reponse);
		}
	}
};
</script>

