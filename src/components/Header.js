import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link, useInRouterContext } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName,setbtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // Subscribing to store using Selector
  const cartItems = useSelector((store) => store.cart.items);


    return (
      <div className="flex justify-between bg-orange-100 shadow-lg lg:bg-green-50">
          <div className="w-36">
             <img className="logo" src={LOGO_URL} />
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">
                Online Status : {onlineStatus ? "✅" : "🔴"}
              </li>
              <li className="px-4">
                 <Link to="/">Home</Link></li>
              <li className="px-4">
                <Link to="About">About Us</Link>
              </li>
              <li className="px-4">
                <Link to="Contact">Contact Us</Link>
              </li>
              <li className="px-4">
                <Link to="Grocery">Grocery</Link>
              </li>
              <li className="px-4 font-bold">
                <Link to="Cart">🛒({cartItems.length})</Link>
              </li>
             
              <button className="login" onClick={()=>{ 
               btnName == "Login" ? setbtnName('Logout') :setbtnName('Login')
                }}
                >{btnName}
                </button>
                <li className="px-4 font-bold">{loggedInUser}</li>
  
            </ul>
          </div>
      </div>
    );
  };

export default Header;

  
