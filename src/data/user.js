const db = require('../schema/user')
const router = require('express').Router()
const { encrypt, decrypt } = require('../utils/crypto')
// -< get users
router.get('/', async (req, res, next) => {
    await db.find(function (error, data) {
        if (error) next(error)
        else {
            const i = data[0].description
            const h = decrypt(i)
            console.log(h)
            res.send({ data })
        }

    })
})
// -< add user
router.post('/', async (req, res, next) => {
    const newUser = new db(req.body)
    newUser.save(function (error, data) {
        if (error) next(error)
        else
            res.send(newUser)
    })
})
// -< update data of user
router.put('/', (req, res, next) => {
    const filter = {
        _id: req.body._id
    }
    delete req.body._id
    db.findByIdAndUpdate(filter, req.body, { new: true }, function (error, data) {
        if (error) next(error)
        else
            res.send(data)
    })
})

module.exports = router