const mongoose = require('mongoose')
const commentsSchema=mongoose.Schema({
    

comments:{
    userID:{
        comment:String,
        type:mongoose.ObjectId,
        ref:'card',
    },
    
    
    }})


    module.exports = mongoose.model('comment',commentsSchema)
