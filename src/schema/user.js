const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    description: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)