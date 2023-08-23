import React from "react";
import CartCard from "./CartCard";
import { Button } from "@material-tailwind/react";

const CartCardList = ({ data,removeFromCart,increaseQuantity,decreaseQuantity }) => {
  const isCartEmpty = data.length === 0;

  return (
    <div className="h-full">
      {isCartEmpty ? (
        <div className="flex flex-col justify-center items-center h-full w-full">
        <img src="assets/images/empty-cart.png" alt="" />
        </div>
      ) : (
        data.map((post) => (
          <CartCard
            key={post.productid}
            _id={post.productid}
            quantity={post.quantity}
            size={post.size}
            color={post.color}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      )}
    </div>
  );
};

export default CartCardList;