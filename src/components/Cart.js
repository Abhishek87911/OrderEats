import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispactch = useDispatch();
    const handleClearCart = () => {
        dispactch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
       className="p-2 m-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black"
       onClick={handleClearCart}
>
  Clear Cart
</button>
        <div className="w-6/12 m-auto shadow-lg">
            
            {cartItems.length === 0 && <h1 className="font-bold text-lg">Cart is empty!! Please Add items to Cart!</h1>}
            <CartItemList items ={cartItems} />
        </div>
        </div>
    );
};

export default Cart;