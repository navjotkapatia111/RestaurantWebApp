import mongoose, { Schema } from "mongoose";

const cartschema = new Schema({
    ItemId:{type:Schema.Types.ObjectId,ref:"items"},
    itemName:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
})

export const cart = mongoose.model("cart",cartschema)