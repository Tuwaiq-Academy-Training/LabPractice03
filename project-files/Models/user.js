const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    //your schema
})

module.exports = mongoose.model('user',userSchema)