<template>
	<div>
		<h1>Sign up</h1>

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
		 @click="signUp">Sign up!</button>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
export default {
  name: "Form",
  data() {
    return {
			username: "",
			password: ""
    };
	},
	methods: {
		async signUp() {
			const reponse = await authenticationService.register({
				username: this.username,
				password: this.password
			});
			console.log(reponse);
		}
	}
};
</script>

