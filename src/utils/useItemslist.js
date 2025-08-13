import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Itemslist = () => {
  const [menulist,setmenulist] = useState([])
  useEffect(()=>{
    const fetchMenu = async()=>{
      try {
        const response = await axios.get("https://restaurant-web-app-gxyi.vercel.app/api/v1/cart/get")
        console.log("...>>>response---",response.data?.cart_items)
        setmenulist(response)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchMenu()
  },[])
  return menulist
};

export default Itemslist;