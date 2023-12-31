const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const UserSchema= new Schema({
    image:{
        type:String
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model("User",UserSchema);
module.exports=User;