var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true },
    artist: { type: String },
    album: { type: String },
    albumPrice: { type: Number, required: true },
    rank: { type: Number, required: true, default: 0 }

});

module.exports = mongoose.model('Song', schema)