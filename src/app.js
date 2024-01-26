import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// import Grocery from "./components/Grocery";





// not using keys(not acceptable)<<<<index as key<<<<<<<<<unique id(best practise)

const Grocery = lazy(()=> import("./components/Grocery"));





const AppLayout = () => {
  const [ userName,setUserName ] = useState("");

  //authentication
useEffect(()=>{
  //MAKE AN API CALL and SEND USERNAME AND PASSWORD

  //dummy data
  const data = {
    name: "OrderEats",
  }
  setUserName(data.name);
},[]);

  return (
    <Provider store={appStore}>
     <UserContext.Provider value = {{loggedInUser:userName}}>
     <div className="app">
     <Header />
     <Outlet />
     <Footer />
     
     </div>
    </UserContext.Provider>
    </Provider>
  );

};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />

      },
      {
        path: "/about",
        element: <About />,
      }
      ,{
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
    errorElement: <Error />,

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

