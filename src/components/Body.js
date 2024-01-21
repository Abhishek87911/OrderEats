import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // local state variable
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState([]);
    useEffect(()=>{
    fetchData("");
    },[]);


    const fetchData = async () => {
        const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        //optional chaining
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    };

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? ( <Shimmer /> ) : (
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value = {searchText} onChange={(e)=>{
                setsearchText(e.target.value);
              }}
              />

              <button onClick={()=>{
                // Filter the restaurant and update UI
                // search text
               const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
               setfilteredRestaurant(filteredRestaurant);

              }}>Search</button>
            </div>
            <button
             className="filter-btn" 
             onClick={()=>{
               //filter logic
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurant(filteredRestaurant);
               
            }}
            >
                Top Rated Restaurant
            </button>

          </div>
          <div className="res-container">
  
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