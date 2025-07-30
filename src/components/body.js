import RestaurantCard from "./restuarantcard";
import { useState, useEffect } from "react";
import resList from "../utils/data";
import Shimmer from "./shimmer";
import { Link } from "react-router";
const Body = () =>{

    let [listofres, setlistofres] =useState([])
    let [filteredres, setfilteredres] =useState([])

    const[searchtext,setsearchtext] = useState("");


    useEffect(() => {
        setlistofres(resList)
        setfilteredres(resList)
    }, []);
   
    return listofres.length == 0 ? (
        <Shimmer />
        ) : (
        <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchtext} onChange={(e) => {
                    setsearchtext(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    console.log(searchtext)
                    const filteredres = listofres.filter(
                        (res)=>res.card.card.info.name.toLowerCase().
                        includes(searchtext.toLowerCase()))
                        setfilteredres(filteredres)

                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-50 rounded-lg" onClick={() => 
            {
                filteredlist = listofres.filter(res=>res.card.card.info.avgRating>4)
                setlistofres(filteredlist)
            }}>
                </button>
            </div>
            
        </div>
        <div className="flex flex-wrap">
            {/* {filteredres.map((restuarant) => (
                // <Link 
                // key={restuarant.card.card.info.id}
                // to={"/restaurantmenu/"+restuarant.card.card.info.id}>
                // <RestaurantCard  resData={restuarant} />
                // </Link>
            ))} */}
            
        </div>
        </div>
    )
}
<RestaurantCard />
export default Body;