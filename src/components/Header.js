import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName,setbtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
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
              <li className="px-4">Cart</li>
              <button className="login" onClick={()=>{ 
               btnName == "Login" ? setbtnName('Logout') :setbtnName('Login')
                }}
                >{btnName}
                </button>
  
            </ul>
          </div>
      </div>
    );
  };

export default Header;

  
