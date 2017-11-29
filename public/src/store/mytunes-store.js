import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)
    //store is your service, components are your controllers
var store = new vuex.Store({
    state: {
        myTunes: [],
        results: []
    },
    //commits, manipulate the state
    //always takes in the state so it has scope
    mutations: {
        setResults(state, results) {
            state.results = results
        },
        setMytunes(state, myTunes) {
            state.myTunes = myTunes
        }

    },

    //dispatch
    actions: {
        //server and Api requests
        //can never have more than two parameters
        getMusicByArtist({ commit, dispatch }, artist) {
            var url = '//bcw-getter.herokuapp.com/?url=';
            var url2 = 'https://itunes.apple.com/search?term=' + artist;
            var apiUrl = url + encodeURIComponent(url2);
            $.get(apiUrl).then(data => {
                commit('setResults', data)
            })
        },
        getMyTunes({ commit, dispatch }) {
            var url = '//loaclhost:300/songs'
            $.get(url).then(data => {
                    commit('getPlaylist, data')
                })
                //this should send a get request to your server to return the list of saved tunes
        },
        addToMyTunes({ commit, dispatch }, song) {
            //this will post to your server adding a new track to your tunes
            var url = '//localhost:3000/songs';
            var song = {
                title: song.trackName,
                artist: song.artistName,
                album: song.collectionName,
                preview: song.previewUrl,
                playlistId: 1
            }
            $.post(url, song)
                .then(data => {
                    store.dispatch('getMytunes')
                })
        },
        removeTrack({ commit, dispatch }, song) {
            //Removes track from the database with delete
            var url = '//localhost:3000/songs/' + song;
            $.ajax({
                    method: 'DELETE',
                    url: url,
                })
                .then(data => {
                    store.dispatch('getMytunes')
                })
        },
        // promoteTrack({ commit, dispatch }, song) {
        //     //this should increase the position / upvotes and downvotes on the track
        // },
        // demoteTrack({ commit, dispatch }, song) {
        //     //this should decrease the position / upvotes and downvotes on the track
        // }

    }
})

export default store