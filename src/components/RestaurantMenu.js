import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

   
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setshowIndex] = useState(null);

if(resInfo === null) return <Shimmer />;

const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
//const  { itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)||(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)  ;

const categories = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))


 




 
  return (
    <div className="mb-14">
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>

      {/* categories accordian */}
      {/* For each category we will show Restaurant Category */}

      {categories.map((category,index)=>(
        // controlled componenet
       
      <RestaurantCategory key = {category?.card?.card?.title} data = {category?.card?.card}
      
      showItems={index == showIndex && !false}
      setshowIndex={()=>setshowIndex(index)}
      />))}

       

      </div>
    </div>
  )
}

export default RestaurantMenu;
