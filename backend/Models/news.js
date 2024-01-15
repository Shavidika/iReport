const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    newsID:{
        type:Number,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    imgSrc:{
        type:String,
        required:true
    },
    reporterID:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true})

const News = mongoose.model("Notification",newsSchema)

module.exports = News;