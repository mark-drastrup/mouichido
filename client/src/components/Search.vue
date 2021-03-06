<template>
<v-layout column class="pt-5">
    <v-flex xs12>
        <v-form>
            <v-container grid-list-sm>
                <p class="display-1">Search</p>
                <v-layout row justify-center align-center>
                    <v-flex xs4>
                        <v-text-field label="Search by title, short description or tag" v-model="search"></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row justify-center>
                    <v-flex xs2>
                        <v-switch v-model="filter.showUnreviewed" label="Unreviewed" color="blue" hide-details></v-switch>
                    </v-flex>
                    <v-flex xs2>
                        <v-switch v-model="filter.tags" label="Noun" color="blue" value="Noun" hide-details></v-switch>
                    </v-flex>
                    <v-flex xs2>
                        <v-switch v-model="filter.tags" label="Verb" color="blue" value="Verb" hide-details></v-switch>
                    </v-flex>
                    <v-flex xs2>
                        <v-switch v-model="filter.tags" label="Adjective" color="blue" value="Adjective" hide-details></v-switch>
                    </v-flex>
                </v-layout>

            </v-container>
        </v-form>

        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="entry in grammar" v-bind:key="entry.id" sm12 md4>
                    <v-card>
                        <v-card-title v-bind:class="{ 
                            blue: !entry.is_reviewed,
                            green: entry.is_reviewed 
                            }">
                            <v-layout row justify-space-between align-center>
                                <h2 class="white--text text-xs-left">{{entry.title}}</h2>
                                <span class="white--text text-xs-right font-weight-light font-italic" v-if="entry.is_reviewed">Reviewed</span>
                            </v-layout>
                        </v-card-title>

                        <v-card-text class="card-height">
                            <v-container grid-list-sm>
                                <v-layout column>
                                    <v-flex xs12 sm6>
                                        <p class="text-xs-left subheading"><strong>Tag:</strong> {{entry.tag}}</p>
                                        <p class="text-xs-left subheading"><strong>Short description: </strong>{{entry.short_description}}</p>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-responsive>
                            <v-btn flat color="info" v-on:click="view(entry.id)">view</v-btn>
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
            userId: this.$store.state.user.id,
            filter: {
                showUnreviewed: false,
                tags: []
            }
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
                this.grammar = (await grammarService.index(value, this.userId, this.filter)).data
            }
        },
        "filter": {
            async handler() {
                this.grammar = (await grammarService.index(this.search, this.userId, this.filter)).data
            },
            deep: true
        }

    },
    methods: {
        view(id) {
            this.$router.push({
                path: `review/${id}`
            });
        }
    },
    async beforeMount() {
        try {
            this.grammar = (await grammarService.index(this.search, this.userId, this.filter)).data
        } catch (error) {
            console.log(error)
        }
    }
};
</script>

<style scoped>
.card-height {
    max-height: 150px;
}
</style>
