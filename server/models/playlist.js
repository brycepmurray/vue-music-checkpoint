var mongoose = require('mongoose')
var Songs = require('./song')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },

});
// for multiple playlists
//schema.pre('remove', next => {
//    console.log('in pre')
//    Songs.remove({ playlistId: this._id }).exec()
//    next()
//});

module.exports = mongoose.models('Playlist', schema)