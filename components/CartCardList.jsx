import React from "react";
import CartCard from "./CartCard";
import { Button } from "@material-tailwind/react";

const CartCardList = ({ data,removeFromCart,refresh,increaseQuantity,decreaseQuantity }) => {
  const isCartEmpty = data.length === 0;

  return (
    <div className="h-full">
      {isCartEmpty ? (
        <div className="flex flex-col justify-center items-center h-full w-full">
        <img src="assets/images/empty-cart.png" alt="" />
        <Button variant="outlined" onClick={refresh} className="flex items-center gap-3 font-normal">
        Refresh
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
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