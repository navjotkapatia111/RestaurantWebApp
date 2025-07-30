import mongoose from "mongoose";
import 'dotenv/config'

export const dbconnection = async()=>{
    try{
        const {connection} = await mongoose.connect(
            process.env.MONGO_URI
        )
        if(connection){
            console.log(`Connection to mongodb ${connection.host}`)
        }
    }
    catch(error){
        console.log(error)
    }
}