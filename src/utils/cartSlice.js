import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";


const cartSlice = createSlice({
    name: "Cart",
    initialState : {
        items: [],
    },
    reducers : {
        addItems : (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItems : (state,action) => {
            const ind = state.items.findIndex(item => isEqual(item, action.payload));
            if(ind > -1){
                state.items.splice(ind,1);
            }
            
        },
        clearCart: (state) => {
            state.items.length = 0;
        },


    },
});

export const { addItems,removeItems,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
