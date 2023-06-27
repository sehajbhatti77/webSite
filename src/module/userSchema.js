const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  name:{
    type:String,
    required:true
  } , 
  email:{
    type:String,
    required:true
  } ,
  number:{
    type:Number,
    min:10
  },
  message:{
    type:String,
    required:true
  } ,
  date: { type: Date, default: Date.now },
});

const User= mongoose.model('user', blogSchema);
module.exports=User