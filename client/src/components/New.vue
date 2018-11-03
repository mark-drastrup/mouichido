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
                            <v-text-field label="Title" v-model="myGrammar.title"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Short description" v-model="myGrammar.short_description"></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select :items="items" label="Tag" v-model="myGrammar.tag"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Grammar ressource" v-model="myGrammar.url"></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar.grammar"></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar.sample_romaji"></v-textarea>
                        </v-flex>

                        <!-- <v-flex xs12>		<v-textarea		name="input"		label="Sample sentences (Kana)"		hint="Write UPPERCASE for Katakana"		rows="4"		v-bind="sample_kana"		v-on:input="sample_kana = $event.target.sample_kana"		id="kana"		></v-textarea>		</v-flex> -->

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar.sample_kana" id="kana"></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>

            <v-responsive>
                <v-btn color="success" v-on:click="save">Save</v-btn>
            </v-responsive>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import {mapState} from "vuex";
import grammarService from "@/services/grammarService";
export default {
    name: "New",
    data() {
        return {
            message: "",
            items: [],
            myGrammar: [{
                title: "",
                short_description: "",
                tag: "",
                url: "",
                grammar: "",
                sample_romaji: "",
                sample_kana: "",
                UserId: this.user.id
            }],
        };
    },
    /* async mounted() {		let kana = document.getElementById("kana")		wanakana.bind(kana); 		}, */
    computed: {
        ...mapState(["isLoggedIn", "user"])
    },
    methods: {
        save() {
            this.create();
            this.remove();
        },
        async create() {
            try {
                const response = await grammarService.post({
                    title: this.myGrammar.title,
                    short_description: this.myGrammar.short_description,
                    tag: this.myGrammar.tag,
                    url: this.myGrammar.url,
                    grammar: this.myGrammar.grammar,
                    sample_romaji: this.myGrammar.sample_romaji,
                    sample_kana: this.myGrammar.sample_kana,
                    UserId: this.user.id
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
</style>
