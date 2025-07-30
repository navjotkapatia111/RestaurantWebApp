import { items } from "../models/itemmodel.js"

export const menu_items = async(req,res)=>{
   try{ 
    const {restaurantId,costforTwo,cuisines} = req.body

    if(!restaurantId || !costforTwo || !cuisines){
       return res.status(400).json({message:"All fields are required"})
    }
    const menu = await items.create({restaurantId,costforTwo,cuisines})
    if(!menu){
        return res.status(400).json({message:'Sorry, some error occurred'})
    }
    res.status(200).json({
        success:true,
        message:'List of Items are:-',
        menu
    })
    }
    catch(e){
        return console.log("Error Occurred",e.message)
    }
}