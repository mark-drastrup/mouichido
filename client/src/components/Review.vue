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

            <v-card-text v-if="!editing">
                <v-container fluid grid-list-sm>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-text-field label="Title" v-model="myGrammar.title" disabled></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Short description" v-model="myGrammar.short_description" disabled></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select :items="items" label="Tag" v-model="myGrammar.tag" disabled></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Grammar ressource" v-model="myGrammar.url" disabled></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar.grammar" disabled></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar.sample_romaji" disabled></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar.sample_kana" disabled></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>
            <v-responsive>
                <v-btn color="success" v-on:click="save" v-if="editing">Save</v-btn>
                <v-btn color="success" v-on:click="reviewed" v-if="!editing">Reviewed</v-btn>
                <v-btn color="info" v-on:click="edit" v-if="!editing">Edit</v-btn>
            </v-responsive>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import {
    mapState
} from 'vuex'
import grammarService from "@/services/grammarService";
export default {
    name: "Review",
    data() {
        return {
            message: "",
            items: [],
            myGrammar: [],
            editing: false
        };
    },
    /* async mounted() {
    	let kana = document.getElementById("kana")
    	wanakana.bind(kana); 
    }, */
    computed: {
        ...mapState([
            'isLoggedIn',
            'user'
        ])
    },
    methods: {
        save() {
            this.editing = false;
            this.create();
        },
        edit() {
            this.editing = true;
        },
        reviewed() {
            this.$emit("reviewed");
        },
        /* remove() {
        	this.$emit("delete");
        }, */
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
                console.log(error)
            }
        },
    },
    /* async mounted() {
        try {
          const grammarId = 1;
          this.myGrammar = (await grammarService.show(grammarId)).data
        } catch (error) {
          console.log(error)
        }		} */
    async beforeMount() {
        try {
            const user = 1;
            //console.log(user)
            this.myGrammar = (await grammarService.show(user)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before {
    border-image: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0, transparent 0, transparent 0) 0 repeat !important;
}
</style>
