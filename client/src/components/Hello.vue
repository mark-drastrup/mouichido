<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
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
            <Review v-if="showCard" @reviewed="reviewed" @edit="edit" @save="save" :entry="entry"></Review>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-layout>
</template>

<script>
  import Review from "./Review"
  import grammarService from "@/services/grammarService";
  export default {
    data: () => ({
      drawer: true,
      showCard: true,
      entry: {
        title: "",
        short_description: "",
        tag: "",
        url: "",
        grammar: "",
        sample_romaji: "",
        sample_kana: "",
        editing: false
      }
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
      save() {
        this.create();
        //this.entry.editing = false;
      },
      edit() {
        this.entry.editing = true;
      },
      show() {
        this.showCard = true;
      },
      async create() {
				try {
						const response = await grammarService.post({
							title: this.entry.title,
							short_description: this.entry.short_description,
							tag: this.entry.tag,
							url: this.entry.url,
							grammar: this.entry.grammar,
							sample_romaji: this.entry.sample_romaji,
							sample_kana: this.entry.sample_kana,
						});
						
				} catch (error) {
						console.log(error)
				}
      }
    },
    async mounted() {
        try {
          const grammarId = 1;
          this.entry = (await grammarService.show(grammarId)).data
        } catch (error) {
          console.log(error)
        }
      }
  }
</script>

<style scoped>
  
</style>