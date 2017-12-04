 var Songs = require('..models/Song')

 router.post('/songs', (req, res, next) => {
         Songs.create(req.body)
             .then(post => {
                 res.send(post)
             })
             .catch(err => {
                 res.status(400).send({ Error: err })
             })
     }),
     router.get('/songs', (req, res, next) => {
         Songs.find({})
             .then(songs => {
                 res.send(songs)
             })
             .catch(err => {
                 res.status(400).send({ Error: err })
             })
     }),
     router.put('/songs/:_id', (req, res, next) => {
         Song.findByIdAndUpdate(req.params._id, req.body)
             .then(() => {
                 res.send({ message: 'Updated Position' })
             })
             .catch(err => {
                 res.status(400).send({ Error: err })
             })
     }),
     router.delete('/songs/:_id', (req, res, next) => {
         Song.findByIdAndRemove(req.params._id)
             .then(() => {
                 res.send({ message: 'So much for that song' })
             })
             .catch(err => {
                 res.status(400).send({ Error: err })
             })
     })

 module.exports = router