import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddItem = (item) => {
        dispatch(addItems(item));
        setSelectedItem(item);
        setShowPopup(true);

        // Close the popup after 2 seconds
        setTimeout(() => {
            setShowPopup(false);
            setSelectedItem(null);
        }, 2000);
    };

    return (
        <div className="relative m-auto my-8">
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
                            <button className="p-2 bg-black text-white shadow-lg rounded-lg hover:bg-gray-700" onClick={() => handleAddItem(item)}>ADD+</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="IMG" className="w-full" />
                    </div>
                </div>
            ))}

            {showPopup && selectedItem && (
                <div className="fixed bottom-0 left-0 mb-4 ml-4 p-2 bg-green-500 text-white rounded z-10">
                    <p>Item added to cart: {selectedItem.card.info.name}</p>
                </div>
            )}
        </div>
    );
};

export default ItemList;
