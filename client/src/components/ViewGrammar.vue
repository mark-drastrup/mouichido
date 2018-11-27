<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title class="blue darken-1">
                <h1 class="white--text text-lg-center">Today's Review</h1>
            </v-card-title>
        
            <v-card-text v-if="editing && !empty">
                <v-container grid-list-sm>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-text-field label="Title" v-model="myGrammar[0].title"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Short description" v-model="myGrammar[0].short_description"></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select :items="items" label="Tag" v-model="myGrammar[0].tag"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Grammar ressource" v-model="myGrammar[0].url"></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar[0].grammar" auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar[0].sample_romaji" auto-grow></v-textarea>
                        </v-flex>

                        <!-- <v-flex xs12>		<v-textarea		name="input"		label="Sample sentences (Kana)"		hint="Write UPPERCASE for Katakana"		rows="4"		v-bind="sample_kana"		v-on:input="sample_kana = $event.target.sample_kana"		id="kana"		></v-textarea>		</v-flex> -->

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar[0].sample_kana" id="kana" auto-grow></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-text v-if="!editing && !empty">
                <v-container fluid grid-list-sm>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-text-field label="Title" v-model="myGrammar[0].title" disabled></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Short description" v-model="myGrammar[0].short_description" disabled></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select :items="items" label="Tag" v-model="myGrammar[0].tag" disabled></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field label="Grammar ressource" v-model="myGrammar[0].url" disabled></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar[0].grammar" disabled auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar[0].sample_romaji" disabled auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar[0].sample_kana" disabled auto-grow></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-text v-if="empty">
                You have nothing to review! <a @click="createNew">Create new</a>
            </v-card-text>

            <v-responsive v-if="!empty">
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
} from 'vuex';
import grammarService from "@/services/grammarService";
export default {
    name: "ViewGrammar",
    data() {
        return {
            message: "",
            items: ["Noun", "Verb", "Adjective"],
            myGrammar: {
                title: null,
                short_description: null,
                tag: null,
                url: null,
                grammar: null,
                sample_romaji: null,
                sample_kana: null,
                is_reviewed: null
            },
            editing: false,
            empty: false,
        };
    },
    computed: {
        ...mapState([
            'isLoggedIn',
            'user'
        ])
    },
    methods: {
        save() {
            this.editing = false;
            this.update();
        },
        edit() {
            this.editing = true;
        },
        reviewed() {
            this.myGrammar[0].is_reviewed = true;
            this.update();
            this.$router.push({
                name: "New",
                params: {alert: true}
            });
        },
        createNew () {
            this.$router.push({
                name: "New"
            });
        },
        async update() {
            try {
                const response = await grammarService.put(this.myGrammar[0]);

            } catch (error) {
                console.log(error)
            }
        },
    },

    async beforeMount() {
        try {
            const grammarId = this.$store.state.route.params.id;
            //console.log(user)
            this.myGrammar = (await grammarService.showGrammar(grammarId)).data

            if(this.myGrammar.length < 1) {
                this.empty = true;
            }
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style>
.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before {
    border-image: repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 0px,transparent 0,transparent 4px) 1 repeat;
}

.theme--light.v-input--is-disabled .v-label, .theme--light.v-input--is-disabled input, .theme--light.v-input--is-disabled textarea {
    color: black;
}
</style>
