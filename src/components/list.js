import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartslice'

const List = () => {
  const [resinfo, setResInfo] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/user/get")
        
        console.log("response",response)
        setResInfo(response.data.list)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMenu()
  }, [])
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {resinfo.map((item) => (
        <div  
          key={item._id} onClick={()=>navigate(`/Restaurantmenu/${item._id}`)}
          className='bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-all'
        >
          {item.cloudinaryImageId && (
            <img
              src={CDN_URL + item.cloudinaryImageId}
              alt={item.name}
              className='w-full h-48 object-cover rounded-md mb-3'
            />
          )}
          <h2 className='text-lg font-semibold'>{item.name}</h2>
          <p className='text-sm text-gray-600'>
            {item.locality && `${item.locality}, `}
            {item.areaName}
          </p>
          {item.costforTwo && (
            <p className='text-sm font-medium text-green-600'>{item.costforTwo}</p>
          )}
          {item.cuisines && item.cuisines.length > 0 && (
            <p className='text-sm text-gray-500'>
              {item.cuisines.join(', ')}
            </p>
          )}
           <button className='border-black border-2 bg-gray shadow-lg h-6'
            onClick={() => handleAddItem(item)}>Add+</button>
        </div>
      ))}
    </div>
  )
}

export default List