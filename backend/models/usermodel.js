import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    firstname:{
        type:String,
     
    },
    lastname:{
        type:String,
      
    },
    password:{
        type:String,
      
    },
    email:{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill in a valid email address'
        ]
    }
})
export const user = mongoose.model("User",userschema)