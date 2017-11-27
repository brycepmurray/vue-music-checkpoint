var express = require('express')
var cors = require('cors')
var bp = require('body-parser')
var server = express()
var port = 3000
var DBConnect = require('./config/mlab/mlab-config')
var playlistRoutes = require('./routes/playlist-routes')
    //MIDDLEWARE

server.use(cors({})) //make cors loaded first in the middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
    //routes

//get playlist
server.use(playlistRoutes)

server.listen(port, () => {
    console.log('Server Runnning on: ', port)
})