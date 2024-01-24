import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../utils/cartSlice";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const CartItemList = ({ items }) => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [removedItem, setRemovedItem] = useState(null);

    const handleRemoveItem = (item) => {
        // Dispatch an action to remove the item from the cart
        dispatch(removeItems(item));
        setRemovedItem(item);
        setShowPopup(true);

        // Close the popup after 2 seconds
        setTimeout(() => {
            setShowPopup(false);
            setRemovedItem(null);
        }, 2000);
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between relative">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="p-2 bg-black text-white shadow-lg rounded-lg hover:bg-gray-700" onClick={() => handleRemoveItem(item)}>REMOVE-</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="IMG" className="w-full" />
                    </div>
                </div>
            ))}

            {showPopup && removedItem && (
                <div className="fixed bottom-0 left-0 mb-4 ml-4 p-2 bg-red-500 text-white rounded z-10">
                    <p>Item removed from cart: {removedItem.card.info.name}</p>
                </div>
            )}
        </div>
    );
};

export default CartItemList;
