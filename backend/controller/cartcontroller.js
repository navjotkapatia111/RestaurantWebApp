import mongoose from "mongoose"
import { cart } from "../models/cartmodel.js"

export const add_cart = async(req,res)=>{
    try{
        const {itemName,Quantity,Price} = req.body

        if(!itemName || !Quantity || !Price){
           return res.status(400).json({message:"All fields required"})
        }
        const addcart = await cart.create({itemName,Quantity,Price})
        console.log("addcart",addcart)
        if(!addcart){
            return res.status(400).json({message:'Sorry, some error occurred'})
        }
        res.status(200).json({
            success:true,
            message:'Cart items are:-',
            addcart
        })
    }
    catch(e){
        return console.log("error",e.message)
    }
}

export const get_cart = async(req,res)=>{
    try{
        const cart_items = await cart.find()
        console.log("cart--",cart_items)
        if(!cart_items){
            return res.status(400).json({message:"Not found"})
        }

        return res.status(200).json({cart_items})
    }
    catch(e){
        console.log(e.message)
    }

}

export const delete_cart = async(req,res)=>{
    try {
        const del = await cart.findByIdAndDelete(req.query.id)
        if(!del){
            res.status(400).json({message:"Id not found"})
        }
        res.status(200).json({del})
    } catch (error) {
        console.log(error.message)
    }
}