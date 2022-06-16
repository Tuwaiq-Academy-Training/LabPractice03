const mongoose = require('mongoose')
const cardSchema=mongoose.Schema({
    

    userID:{
        type:mongoose.ObjectId,
        ref:'User',
    },
    question:{
        type:String,

},
    answer:{
      type:  String,
    },
    tags:{
        type:String,
    comments:[comments],
    
  } })

  module.exports = mongoose.model('card',cardSchema)
