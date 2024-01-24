import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

// import { CDN_URL } from "../utils/constants";
const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


const CartItemList = ({items}) => {

    const dispactch = useDispatch();
    const handleAddItem = (item) => {
        //Dispactch an action
       dispactch(removeItems(item));
    };
 
return (
    
   
    <div>
       {items.map((item) => (
        <div key = {item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
               <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>- ₹ {item.card.info.price ?item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">
                {item.card.info.description}
                </p>
                </div>
                <div className="w-3/12">
                <div className="absolute">
                {/* <button className="p-2 bg-black text-white shadow-lg  rounded-lg hover:bg-gray-700 " onClick={() => handleAddItem(item)}>ADD+</button> */}
                <button className="p-2 bg-black text-white shadow-lg  rounded-lg hover:bg-gray-700 " onClick={() => handleAddItem(item)}>REMOVE-</button>

                </div>
               
                <img src={CDN_URL+item.card.info.imageId} alt="IMG" className="w-full" />
                </div>
        </div>
       ))}
    </div>
)
}

export default CartItemList;