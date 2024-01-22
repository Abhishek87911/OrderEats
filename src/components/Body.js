import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // local state variable
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState([]);
    useEffect(()=>{
    fetchData("");
    },[]);
    console.log(listOfRestaurant);


    const fetchData = async () => {
        const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        //optional chaining
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    };
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
     return (
      <h1>Looks.. Like you are offline!!.. Please Check your Internet Connection.

      </h1>
    );




    // Conditional Rendering
    return listOfRestaurant.length === 0 ? ( <Shimmer /> ) : (
      <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
              <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e)=>{
                setsearchText(e.target.value);
              }}
              />

              <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
              onClick={()=>{
                // Filter the restaurant and update UI
                // search text
               const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
               setfilteredRestaurant(filteredRestaurant);

              }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <button
             className="px-4 py-2 bg-gray-100 rounded-lg" 
             onClick={()=>{
               //filter logic
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurant(filteredRestaurant);
               
            }}
            >
                Top Rated Restaurant
            </button></div>
            

          </div>
          <div className="flex flex-wrap content-center">
  
            {
              filteredRestaurant.map((restaurant,index) => 
              <Link 
              key = {restaurant.info.id}  
              to={"/restaurants/"+restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
              </Link>)
            }
          </div>
      </div>
    );
    
  };

export default Body;