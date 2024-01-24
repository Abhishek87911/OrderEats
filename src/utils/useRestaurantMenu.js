import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo ,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setresInfo(json.data);
        } catch (error) {
            // Handle the error and set an error state or display a message
            console.error("Error fetching data:", error.message);
            
        }
        

    };
    return resInfo;
}


export default useRestaurantMenu;