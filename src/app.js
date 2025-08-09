import React, {Suspense, useState, useEffect}  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Contact from "./components/contact";
import Error from "./components/error";
import Cart from "./components/cart";
import Restaurantmenu from "./components/restaurantmenu";
import { createBrowserRouter , RouterProvider, Outlet, Routes, Route} from "react-router";
import { Provider } from "react-redux";
import Appstore from "./utils/appstore";
import UserContext from "./utils/UserContext";
import About from "./components/about"
import SignIn from "./components/sign";
import List from "./components/list";
import ResetPassword from "./components/resetpassword";
import Body from "./components/body";
const Applayout = () => {
    const[userName, setUserName] = useState();
    // const[setshowsignup] = useState(false)
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const data = {
            name: "Navjot"
        }
        setUserName(data.name)
    },[])

    return(
        <Provider store={Appstore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
        <Header setShowModal={setShowModal} />
        {showModal && <SignIn showsignin={showModal} setshowsignin={setShowModal} />}

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Applayout />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/list",
                element:<List/>
            },
            {
                path: "/about",
                element:<Suspense fallback = {<h1>Loading.....</h1>}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/Restaurantmenu/:id",
                element: <Restaurantmenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path:"/reset/:token",
                element:<ResetPassword />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);