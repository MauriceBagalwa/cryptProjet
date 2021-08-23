const mongoose = require('mongoose')
const { encrypt, decrypt } = require('../utils/crypto')
const userSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    description: {
        iv: String,
        content: String
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    try {
        this.description = encrypt(Buffer.from(`${this.description}`, 'utf8'))
        console.log(this.description)
        next()
    } catch (err) { next(err) }
})

userSchema.pre('query', function (next) {
    try {
        // this.description = decrypt(this.description)
        // this.where({ description: decrypt(this.description) })
        // console.log(description)
        this.where('deleted').equals(false)
        this.description="test change"
        next()
    } catch (err) { next(err) }
})
module.exports = mongoose.model('users', userSchema)