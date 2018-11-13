<template>
<v-layout column>
    <v-flex xs12>
        <v-form>
            <v-container grid-list-sm>
                <p class="display-1">Search</p>
                <v-layout row justify-center>
                    <v-flex xs4>
                        <v-text-field label="Search" v-model="search"></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>

        <v-container grid-list-md>
            <v-layout row>
                <v-flex v-for="entry in grammar" v-bind:key="entry.id" xs12 sm4>
                    <v-card>
                        <v-card-title>
                            <h1 class="grey--text text-lg-center">{{entry.title}}</h1>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-sm>
                                <v-layout column>
                                    <v-flex xs12 sm6>
                                        <p>{{entry.short_description}}</p>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-responsive>
                            <v-btn color="info">view</v-btn>
                        </v-responsive>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</v-layout>
</template>

<script>
import {
    mapState
} from "vuex";
import grammarService from "@/services/grammarService";
export default {

    name: "Search",
    data() {
        return {
            search: "",
            grammar: null,
            title: "",
            short_description: ""
        };
    },
    watch: {
        search: async function (value) {
            const route = {
                name: ""
            }
            if (this.search !== "") {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        },
        "$route.query.search": {
            immediate: true,
            async handler(value) {
                this.search = value;
                this.grammar = (await grammarService.index(value)).data
            }
        }

    }
};
</script>

<style scoped>
</style>
