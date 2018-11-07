<template>
<v-layout>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
            <v-list-tile v-on:click="show">
                <v-list-tile-action>
                    <v-icon>check</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Review</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-on:click="newCard">
                <v-list-tile-action>
                    <v-icon>add</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>New</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="blue darken-1" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Mouichido</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid>
            <v-layout>
                <v-flex>
                    <Review v-if="showReview" @reviewed="reviewed"></Review>
                    <New v-if="showNew" @keepReviewing="show" v-bind:alert="this.showAlert"></New>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-layout>
</template>

<script>
import Review from "./Review"
import New from "./New"
export default {
    data: () => ({
        drawer: true,
        showReview: true,
        showNew: false,
        showAlert: false
    }),
    components: {
        Review,
        New
    },
    props: {
        source: String
    },
    methods: {
        test() {
            this.showAlert = true
        },
        reviewed() {
            this.showReview = false;
            this.showAlert = true;
            this.showNew = true;
        },
        /* save() {
          this.create();
          //this.entry.editing = false;
        }, */
        /* edit() {
          this.entry.editing = true;
        }, */
        show() {
            this.showReview = true;
            this.showNew = false;
        },
        newCard() {
            this.showNew = true;
            this.showAlert = false;
            this.showReview = false;
        }
    }
}
</script>

<style>
    main.v-content {
        padding-top: 0;
    }
</style>
