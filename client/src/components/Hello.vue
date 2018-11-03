<template>
<v-layout>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
            <v-list-tile v-on:click="show">
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="blue darken-1" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid>
            <v-layout>
                <v-flex>
                    <Review v-if="showCard" @reviewed="reviewed"></Review>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-layout>
</template>

<script>
import Review from "./Review"
export default {
    data: () => ({
        drawer: true,
        showCard: false,
    }),
    components: {
        Review
    },
    props: {
        source: String
    },
    methods: {
        reviewed() {
            this.showCard = false;
        },
        /* save() {
          this.create();
          //this.entry.editing = false;
        }, */
        /* edit() {
          this.entry.editing = true;
        }, */
        show() {
            this.showCard = true;
        }
    }
}
</script>

<style scoped>
  
</style>
