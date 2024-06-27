const mongoose=require('mongoose');

const newsDataSchema=new mongoose.Schema({
    id:Number,
    img_url:String,
    category:String
});

module.exports=mongoose.model('newsdatas',newsDataSchema);