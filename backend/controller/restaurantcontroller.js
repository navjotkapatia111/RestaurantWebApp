import mongoose from "mongoose";
import { items } from "../models/itemmodel.js";
import { restaurant } from "../models/restaurantmodel.js";

export const createRestaurant = async(req,res)=>{
    try{
        const {name,locality,areaName,cloudinaryImageId} = req.body

    if(!name || !locality || !areaName || !cloudinaryImageId){
        res.status(400).json({message:'All fields are required'})
    }

    const find = await restaurant.findOne({name})

    if(find){
        return res.status(400).json({message:'Restaurant with this name already exists',find})
    }

    const list = await restaurant.create({
        name,locality,areaName,cloudinaryImageId
    })
    console.log("...>>>",list)

    if(!list){
        return res.status(400).json({message:'Sorry, some error occurred'})
    }

    res.status(200).json({
        success:true,
        message:'Restaurant created successfully',
        list
    })
    }
    catch(error){
        return console.log(error.message)
    }
}

export const getRestaurant = async(req,res)=>{
   try{
    console.log('getRestaurant called - Origin:', req.get('origin'));
    
    const list = await restaurant.find()
    
    if(!list || list.length === 0){
        return res.status(404).json({
            success: false,
            message: "No restaurants found",
            list: []
        })
    }

    res.status(200).json({
        success:true,
        message:"List of all restaurants are:-",
        list
    })
    }

    catch(error){
        console.log('Error in getRestaurant:', error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }    
}

export const getMenu = async(req,res)=>{
    try{

        const id = req.query.id
        const restaurant_data = await restaurant.findById(new mongoose.Types.ObjectId(id))
        const menu_list = await items.find({restaurantId:new mongoose.Types.ObjectId(id)})

        if(!restaurant_data || !menu_list){
            return res.status(400).json({message:"Not found"})
        }

        return res.status(200).json({restaurant_data,menu_list})
    }
    catch(e){
       return console.log("Error Occurred",e.message)
    }
}

export const updateRestaurant = async(req,res)=>{
    try{
        const {id} = req.params

        const updated = await restaurant.findByIdAndUpdate(id,req.body,{new:true})
        if (!updated) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json({
            success:true,
            message:"Restaurant data updated successfully"
        })
    }

    catch(error){
        console.log(error.message)
    }
}