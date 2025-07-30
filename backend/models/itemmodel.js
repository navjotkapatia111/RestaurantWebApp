import mongoose, { Schema } from "mongoose";

const itemschema = new Schema({
    restaurantId:{type:Schema.Types.ObjectId,ref:"restaurant"},

    costforTwo:{
        type:String,
        required:true
    },
    cuisines:{
        type:[String],
        required:true
    }
})
export const items = mongoose.model("items",itemschema)