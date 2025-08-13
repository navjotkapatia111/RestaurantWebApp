import { CDN_URL } from "../utils/constants"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
const Restaurantmenu = () => {
    const {id} = useParams()
    const [restaurant,setrestaurant] = useState([])

    useEffect(()=>{
      const fetchMenu = async()=>{
        try{
          const data = await axios.get(`https://restaurant-web-app-gxyi.vercel.app/api/v1/user/menu?id=${id}`)   
           
          console.log(data)     
          setrestaurant(data.data?.restaurant_data)
        }
        catch(error){
          console.log(error)
        }
      }
      fetchMenu()
    },[])

  return(
    <div className='text-center'>
      <div className="flex justify-center">
      {restaurant.cloudinaryImageId && (<img className="w-80 rounded-lg shadow-lg"
            alt="none" src={CDN_URL+restaurant?.cloudinaryImageId}/>)}
            
      </div>
        <h1 className="font-bold text-3xl my-8">{restaurant.name}</h1>
        <p className="font-bold text-xl">
          {restaurant.cuisines} - {restaurant.costForTwo}</p>
        <p className="font-bold text-xl">{restaurant.locality}</p>
        <p className="font-bold text-xl">{restaurant.areaName}</p>          
    </div>
  )
}

export default Restaurantmenu