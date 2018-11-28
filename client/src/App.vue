<template>
<div id="app">
    <v-app>
        <header>
            <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
        </header>
        <v-layout>
            <v-navigation-drawer v-model="drawer" v-if="isLoggedIn" clipped fixed app>
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
                    <v-list-tile v-on:click="search">
                        <v-list-tile-action>
                            <v-icon>search</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Search</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left class="blue darken-1" dark>
                <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="$store.state.isLoggedIn">
                    <v-icon>menu</v-icon>
                </v-toolbar-side-icon>
                <v-toolbar-title>Mouichido</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn 
                        v-if="!$store.state.isLoggedIn" 
                        flat 
                        dark 
                        :to="{
                            name: 'Login'
                        }">
                        Login
                    </v-btn>

                    <v-btn 
                        v-if="!$store.state.isLoggedIn" 
                        flat 
                        dark 
                        :to="{
                            name: 'Signup'
                        }">
                        Sign Up
                    </v-btn>

                    <v-btn 
                        v-if="$store.state.isLoggedIn"
                        flat 
                        dark
                        @click="logout">
                        Log Out
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-layout>

    </v-app>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    name: 'app',
    data() {
        return {
            drawer: true,
            show: false
            /* showReview: true,
            showNew: false,
            showSearch: false, */
        }
    },
    computed: {
        ...mapState(["isLoggedIn", "user"])
    },
    methods: {
        show() {
            /* this.showReview = true;
            this.showNew = false;
            this.showSearch = false; */
            this.$router.push({
                name: "Review"
            });
        },
        newCard() {
            /* this.showNew = true;
            this.showReview = false;
            this.showSearch = false; */
            this.$router.push({
                name: "New"
            });
        },
        search() {
            /* this.showSearch = true;
            this.showNew = false;
            this.showReview = false */
            this.$router.push({
                name: "Search"
            });
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.$store.dispatch("setUser", null);
            //navigate to homepage
            this.$router.push({
                name: "root"
            });
        }
    }
}
</script>

<style>
body {
    margin: 0;
    overflow-y: hidden !important;
}

main .v-content {
    margin-top: 0;
    padding-top: -50px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

main {
    text-align: center;
    margin-top: 40px;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
}

header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}

::-webkit-scrollbar {
    width: 0;
}
</style>
