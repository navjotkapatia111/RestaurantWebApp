import { CDN_URL } from "../utils/constants.js"

const Itemslist = ({items = []}) => {
    console.log("Data received:- ",items)
    return (
      <div>
        {items.map((item) => (
          <div key={item._id} className="p-2 border-b border-gray-200">
            <div className="mt-5 mx-auto justify-center items-center ml-[35%]">
            <img src={CDN_URL+item.cloudinaryImageId}
            className="h-48 object-cover rounded-md mb-3"/>
            </div>
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-lg font-semibold">{item.cuisines.join(" , ")}</p>
            <p className="text-lg font-semibold">{item.costforTwo}</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default Itemslist
  