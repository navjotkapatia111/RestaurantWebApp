import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./cartslice"
const Appstore = configureStore({
    reducer:{
        cart: Cartreducer,
    },
})
export default Appstore