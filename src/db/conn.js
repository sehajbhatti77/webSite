const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/data').then(()=>{
    console.log("Connection successfuly")
}).catch((e)=>{
    console.log(e)
});