<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
            <h1 class="grey--text text-lg-center">Today's entry</h1>
        </v-card-title>
				<v-card-text v-if="editing">
					<v-container grid-list-sm>
						<v-layout row wrap>
							<v-flex xs12 sm6>
								<v-text-field
									label="Title"
									v-model="title"
								></v-text-field>
							</v-flex>
							<v-flex xs12 sm6>
								<v-text-field
									label="Short description"
									v-model="short_description"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-select
									:items="items"
									label="Tag"
									v-model="tag"
								></v-select>
							</v-flex>
							<v-flex xs12 sm6>
								<v-text-field
									label="Grammar ressource"
									v-model="ressource"
								></v-text-field>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Grammar description"
								rows="4"
								v-model="grammar_description"
								></v-textarea>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Sample sentences (Romaji)"
								rows="4"
								v-model="sample_romaji"
								></v-textarea>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Sample sentences (Kana)"
								hint="Write UPPERCASE for Katakana"
								rows="4"
								v-bind="sample_kana"
								v-on:input="sample_kana = $event.target.sample_kana"
								id="kana"
								></v-textarea>
							</v-flex>
						
						</v-layout>
					</v-container>
				</v-card-text>

				<v-card-text v-if="!editing">
					<v-container fluid grid-list-sm>
						<v-layout row wrap>
							<v-flex xs12 sm6>
								<v-text-field
									label="Title"
									v-model="title"
									disabled
								></v-text-field>
							</v-flex>
							<v-flex xs12 sm6>
								<v-text-field
									label="Short description"
									v-model="short_description"
									disabled
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-select
									:items="items"
									label="Tag"
									v-model="tag"
									disabled
								></v-select>
							</v-flex>
							<v-flex xs12 sm6>
								<v-text-field
									label="Grammar ressource"
									v-model="ressource"
									disabled
								></v-text-field>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Grammar description"
								rows="4"
								v-model="grammar_description"
								disabled
								></v-textarea>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Sample sentences (Romaji)"
								rows="4"
								v-model="sample_romaji"
								disabled
								></v-textarea>
							</v-flex>

							<v-flex xs12>
								<v-textarea
								name="input"
								label="Sample sentences (Kana)"
								hint="Write UPPERCASE for Katakana"
								rows="4"
								v-model="sample_kana"
								disabled
								></v-textarea>
							</v-flex>
						
						</v-layout>
					</v-container>
				</v-card-text>
        <v-responsive>
					<v-btn color="success" v-on:click="save" v-if="editing">Save</v-btn>
					<v-btn color="info" v-on:click="edit" v-if="!editing">Edit</v-btn>
        </v-responsive>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
	export default {
	  	name: "Grammar",
		data() {
			return {
				message: "",
				items: [],
				title: "",
				short_description: "",
				tag: "",
				ressource: "",
				grammar_description: "",
				sample_romaji: "",
				sample_kana: "",
				editing: true
			};
		},
		mounted() {
			/* let kana = this.$refs.kana; */
			let kana = document.getElementById("kana")
			wanakana.bind(kana);
		},
		methods: {
			save() {
				this.editing = false;
				this.remove();
			},
			edit() {
				this.editing = true
			},
			remove() {
				this.$emit("delete");
			}
		}
  }

	var test = document.getElementById("kana");
	/* wanakana.bind(kana); */
	
 
</script>

<style scoped>
	.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before {
    	border-image: repeating-linear-gradient(90deg,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,transparent 0,transparent 0) 0 repeat !important;
	}
</style>