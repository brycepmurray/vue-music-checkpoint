var Songs = require('../models/song')
var Playlists = require('../models/playlist')
var router = require('express').Router()

router.get('/api/playlist/', (req, res, next) => {
        Songs.find({})
            .then(songs => {
                res.send(songs)
            })
            .catch(err => {
                res.status(400).send({ Error: err })
            })
    })
    //get song at specific Id
router.get('/api/playlist/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

//post new song into playlist
router.post('/api/playlist/', (req, res, next) => {
        Songs.create(req.body)
            .then(song => {
                res.send(song)
            })
            .catch(err => {
                res.status(400).send({ Error: err })
            })
    })
    //delete song from playlist
router.delete('/api/playlist/:songId', (req, res, next) => {
        Songs: findByIdAndRemove(req.params.songId)
            .then(song => {
                res.send({ message: 'song removed from playlist' })
            })
            .catch(err => {
                res.status(400).send({ Error: err })
            })
    })
    //update playlist with a put request
router.put('/api/playlist/:songId', (req, res, next) => {
    Songs.findByIdAndUpdate(req.params.songId, req.body)
        .then(() => {
            res.send('playlist updated')
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

module.exports = router