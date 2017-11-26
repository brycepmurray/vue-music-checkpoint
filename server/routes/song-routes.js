var Songs = require('..models/Song')

router.post('/songs', (req, res, next),
    Songs.create(req.body)
    .the(post => {
        res.send(post)
    })
    .catch(err => {
        res.status(400).send({ Error: err })
    })


)