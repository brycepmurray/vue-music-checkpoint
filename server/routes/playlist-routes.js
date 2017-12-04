var Songs = require('../models/song')
var Playlists = require('../models/playlist')
var router = require('express').Router()

router.post('/mytunes', (req, res, next) => {
    Playlist.create(req.body)
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/mytunes', (req, res, next) => {
    Playlist.find({})
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.delete('/mytunes/:id', (req, res, next) => {
    Playlist.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send({ message: 'playlist sucesfully deleted' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})
module.exports = router