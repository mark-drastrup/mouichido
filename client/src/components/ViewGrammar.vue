<template>
<v-layout class="pt-5">
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title v-bind:class="{
                blue: !myGrammar.is_reviewed,
                green: myGrammar.is_reviewed
            }">
                <v-layout row justify-space-between align-center>
                    <h1 class="white--text text-lg-center">{{myGrammar.title}}</h1>
                    <v-icon dark v-on:click="openDialog">clear</v-icon>
                </v-layout>
            </v-card-title>

            <v-card-text v-if="editing && !empty">
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
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar.grammar" auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar.sample_romaji" auto-grow></v-textarea>
                        </v-flex>

                        <!-- <v-flex xs12>		<v-textarea		name="input"		label="Sample sentences (Kana)"		hint="Write UPPERCASE for Katakana"		rows="4"		v-bind="sample_kana"		v-on:input="sample_kana = $event.target.sample_kana"		id="kana"		></v-textarea>		</v-flex> -->

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar.sample_kana" id="kana" auto-grow></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-text v-if="!editing && !empty">
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
                            <v-textarea name="input" label="Grammar description" rows="4" v-model="myGrammar.grammar" disabled auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Romaji)" rows="4" v-model="myGrammar.sample_romaji" disabled auto-grow></v-textarea>
                        </v-flex>

                        <v-flex xs12>
                            <v-textarea name="input" label="Sample sentences (Kana)" hint="Write UPPERCASE for Katakana" rows="4" v-model="myGrammar.sample_kana" disabled auto-grow></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card-text>

            <v-responsive v-if="!empty">
                <v-btn color="success" v-on:click="save" v-if="editing">Save</v-btn>
                <v-btn color="success" v-on:click="reviewed" v-if="!editing && !myGrammar.is_reviewed">Reviewed</v-btn>
                <v-btn color="success" v-on:click="back" v-if="!editing && myGrammar.is_reviewed">Go back</v-btn>
                <v-btn color="info" v-on:click="edit" v-if="!editing">Edit</v-btn>
            </v-responsive>
        </v-card>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Delete grammar
                </v-card-title>

                <v-card-text>
                    Do you want to delete this grammar card? It cannot be recreated once it is deleted.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn color="error" flat v-on:click="destroy">
                        Delete
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn color="info" flat v-on:click="dialog = false">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
            dialog: false
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
        openDialog() {
            this.dialog = true;
        },
        async destroy() {
            try {
                const id = this.myGrammar.id;
                await grammarService.delete(id);
                this.$router.push({
                    name: "Search"
                });
            } catch (error) {
                console.log(error)
            }
        },
        reviewed() {
            this.myGrammar.is_reviewed = true;
            this.update();
            this.$router.push({
                name: "Search"
            });
        },
        createNew() {
            this.$router.push({
                name: "New"
            });
        },
        back() {
            this.$router.push({
                name: "Search"
            });
        },
        async update() {
            try {
                const response = await grammarService.put(this.myGrammar);

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

            if (this.myGrammar.length < 1) {
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
    border-image: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0px, transparent 0, transparent 4px) 1 repeat !important;
}

.theme--light.v-input--is-disabled .v-label,
.theme--light.v-input--is-disabled input,
.theme--light.v-input--is-disabled textarea,
.v-select__selection .v-select__selection--comma .v-select__selection--disabled {
    color: black !important;
}
</style>
