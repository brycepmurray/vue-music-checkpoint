<template>
<div class="Itunes">
    <div class="row">
        <div class="col-md-offset-2 col-md-4">
            <h3 class="title">Search</h3>
            <form @submit.prevent="searchByArtist">
                <input style="color:grey" type="text" placeholder="Artist" v-model="artist"> 
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    </div>
    <div class="row" v-for="song in songs">
        <div class="col-md-6">
            <img :src="song.artworkUrl100">
            <h4>Title: {{song.trackName}}</h4>
            <h5>Artist: {{song.artistName}}</h5>
            <audio controls style="width:auto">
                <source :src="song.previewUrl">
            </audio>
            <button @click="addToPlaylist(song)" class="btn btn-primary" type="button">Add to Favorites</button>
        </div>
    </div>
 </div>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {
                arist: ""
            }
        },
        methods: {
            searchByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToPlaylist(song) {
                this.$store.dispatch('addToTunes', song)
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            }
        }
    }
</script>

<style>

</style>