const mongoose = require('mongoose')
const courseSchema=mongoose.Schema({
    

courseName:String ,
userID:{
    type:mongoose.ObjectId,
    ref:'User',
    required: true,

},

hour:{
    type:Number,
    required: true,

},

    subject:{
        type:String,
    title:String,
    required: true,
    cards:[card]
    
    
    }})









    module.exports = mongoose.model('course',couseSchema)
