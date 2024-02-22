import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length != 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-md"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 ? (
          <h1 className="m-4 p-4 font-bold text-xl text-center">
            Your cart is empty
          </h1>
        ) : (
          <MenuItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
