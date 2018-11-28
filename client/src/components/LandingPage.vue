<template>
    <v-container fluid>
        <div>
            <!-- <img src="../../static/landing.png" alt=""> -->
            <p>Landing</p>
        </div>
    </v-container>
</template>

<script>
import {
    mapState
} from "vuex";
import grammarService from "@/services/grammarService";
export default {
    name: "LandingPage",
    computed: {
        ...mapState(["isLoggedIn", "user"])
    },
};
</script>

<style>
    main.v-content {
        padding-top: 0;
    }
</style>
