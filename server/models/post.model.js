const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    iduser:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

    }
   
})


const Post=mongoose.model("Post",PostSchema)
module.exports = Post
