import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartslice";
import useItemslist from "../utils/useItemslist";
import Itemslist from "./itemlist"

const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    const menulist = useItemslist()
    return (
    <div className="text-center m-3 p-3">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w/12 m-auto">
            <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>
                Clear Button</button>
            <Itemslist items={menulist.length > 0 ? menulist : cartItems}/>
        </div>
        </div>
    )
}
export default Cart;
