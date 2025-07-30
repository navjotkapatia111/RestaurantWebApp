// import { useEffect, useState } from "react"
// import axios from "axios"

// const useRestaurantMenu = (id) => {
//   const [resinfo, setResInfo] = useState(null)
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         console.log("====>>id",id)
//         const response = await axios.get(
//           `http://localhost:5001/api/v1/user/menu?id=${id}`
//         )

//         setResInfo(response.data)
//         console.log("....>>>", response)
        
//       } catch (error) {
//         console.error("Error fetching menu: ", error)
//       }
//     }

//     fetchMenu()
//   }, [id])

//   return resinfo

// }
// export default useRestaurantMenu
