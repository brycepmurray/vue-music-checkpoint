var express = require('express')
var cors = require('cors')
var bp = require('body-parser')
var server = express()
var port = 3000

//MIDDLEWARE

server.use(cors({})) //make cors loaded first in the middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
    //routes

//getMyTunes

//addSongToList (GET)

//updateRank (PUT)

//delete track from update list (DELETE)

//ROUTES

server.listen(port, () => {
    console.log('Server Runnning on: ', port)
})