<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <Review @reviewed="reviewed" @createNew="newCard"></Review>
                <New v-bind:alert="showAlert"></New>
                <Search></Search>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Review from "./Review"
import New from "./New"
import Search from "./Search"
export default {
    //props: ["showReview", "showNew", "showSearch"],
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
            console.log("test 2")
            this.showAlert = true;
            this.$router.push({
                name: "New",
                params: {showAlert}
            });
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
