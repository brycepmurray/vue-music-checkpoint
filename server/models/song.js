var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String },
    album: { type: String },
    playlistId: { type: ObjectId, ref: 'Playlist', required: true }

});

module.exports = mongoose.model('Song', schema)