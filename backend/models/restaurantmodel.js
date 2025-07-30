import mongoose, { Schema } from "mongoose";

const restaurantschema = new Schema({
    name:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    areaName:{
        type:String,
        required:true
    },
    cloudinaryImageId:{
        type:String,
        required:true
    },
})

export const restaurant = mongoose.model('restaurant',restaurantschema)