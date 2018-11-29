<template>
<v-container fluid class="pa-0" id="landing-container">
    <div id="landing">
        <div id="landing-content">
            <h1 class="display-3 font-weight-bold">Mouichido</h1>
            <p class="headline">is the best language learning tool to keep track of your daily japanese grammar</p>
            <p class="headline">Create a free account and get started learning today!</p>
            <v-btn
                id="signup-btn" 
                depressed 
                large 
                color="primary"
                :to="{
                    name: 'Signup'
                }">Sign up!
            </v-btn>
        </div>
    </div>
</v-container>
</template>

<script>

</script>

<style>
#landing-container {
    height: 100%;
}

#landing {
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../static/img/landing.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding-top: 250px;
    text-align: center;
    color: white
}

#landing-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#signup-btn {
    width: 40%
}
</style>
