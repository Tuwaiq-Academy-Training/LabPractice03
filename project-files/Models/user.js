const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:Number,
    gender: Boolean,
    email:String,
},{timestamps:true});

module.exports = mongoose.model('user',userSchema)


