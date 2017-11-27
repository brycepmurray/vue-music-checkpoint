var mongoose = require('mongoose')
var connectionString = 'mongodb://<dbuser>:<dbpassword>@ds048719.mlab.com:48719/musicstore'

var connection = mongoose.connection

mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: { socketOptions: { keepAlive: 300000, connectionTimeoutMS: 30000 } }
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', () => {
    console.log('Connected to database')
})