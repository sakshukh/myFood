import React from "react";
import ItemCard from "./restaurant/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../redux/cartSlice";

const Cart = () => {
  // subscribing to the cart store
  const cartItems = useSelector((store) => store.cart.items);

  // dispatch
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="p-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h3>Your cart is empty.. please add something to order</h3>
        ) : (
          cartItems?.map((item) => <ItemCard item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Cart;
