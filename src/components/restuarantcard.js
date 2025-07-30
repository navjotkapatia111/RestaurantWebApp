// import { useContext } from "react";
// import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";
// const RestaurantCard = (props) =>{
//     const {resData} = props;
//     const {loggedInUser}  = useContext(UserContext)
//     return (
//         <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
//             <img className="rounded-lg"
//             alt="none" src={CDN_URL+resData.card.card.info.cloudinaryImageId}/>
//             <h3 className="font-bold py-4 text-lg">{resData.card.card.info.name}</h3>
//             <h3>{resData.card.card.info.cuisines.join(" , ")}</h3>
//             <h3>{resData.card.card.info.avgRating}</h3>
//             <h3>{resData.card.card.info.costForTwo}</h3>
//             <h3>{resData.card.card.info.deliveryTime} minutes</h3>
//             <h4>User: {loggedInUser}</h4>
//         </div>
//     )
// }
// export default RestaurantCard;