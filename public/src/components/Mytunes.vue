<template>
<div class ="Mytunes">
    <div class="row">
        <div class="col-md-offset-2 col-md-4">
            <h3>My Playlist</h3>
        </div>
    </div>
    <div class="row" v-for="song in songs">
        <div class="col-md-6">
            <h4>Title:{{song.title}}</h4>
            <h5>Artist: {{song.artist}}</h5>
            <audio controls style="width: auto">
                    <source :src="song.preview">
                </audio>
                <button @click="remove(song._id)" type="button" class="btn btn-primary">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Mytunes',
        data() {
            return {}
        },
        mounted() {
            this.$store.dispatch('getMytunes')
        },
        methods: {
            //functions
            remove(song) {
                this.$store.dispatch('removeTrack', song)
            }
        },
    }
</script>

<style>

</style>