const { encrypt, decrypt } = require('../utils/crypto')
const db = require('../schema/user')
const router = require('express').Router()

// -< get users
router.get('/', async (req, res, next) => {
    await db.find(function (data, error) {
        if (error) console.log(error)
        else
            res.send(data)
    })
})
// -< add user
router.post('/', async (req, res, next) => {
    const newUser = new db(req.body)
    newUser.save(function (data, error) {
        if (error) console.log(error)
        else
            res.send(data)
    })
})
// -< update data of user
router.put('/', (req, res, next) => {
    const filter = {
        _id: req.body._id
    }
    delete req.body._id
    db.findByIdAndUpdate(filter, req.body, { new: true }, function (data, error) {
        if (error) console.log(error)
        else
            res.send(data)
    })
})

module.exports = router