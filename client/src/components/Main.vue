<template>

        <v-container fluid>
            <v-layout>
                <v-flex>
                    <Review v-if="showReview" @reviewed="reviewed" @createNew="newCard"></Review>
                    <New v-if="showNew" @keepReviewing="show" v-bind:alert="showAlert"></New>
                    <Search v-if="showSearch"></Search>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
import Review from "./Review"
import New from "./New"
import Search from "./Search"
export default {
    props: ["showReview", "showNew", "showSearch"],
    data() {
        return {
            showAlert: false
        }
    },
    components: {
        Review,
        New,
        Search
    },
    /* props: {
        source: String
    }, */
    methods: {
        reviewed() {
            this.showAlert = true;
            this.$emit("reviewed");
        },
        newCard() {
            this.$emit("newCard");
        },
        show() {
            this.showAlert = false;
            this.$emit("show")
        },
        /* save() {
          this.create();
          //this.entry.editing = false;
        }, */
        /* edit() {
          this.entry.editing = true;
        }, */
        /* 
        
        search() {
            this.showSearch = true;
            this.showNew = false;
            this.showReview = false
        } */
    }
}
</script>

<style>
    main.v-content {
        padding-top: 0;
    }
</style>
