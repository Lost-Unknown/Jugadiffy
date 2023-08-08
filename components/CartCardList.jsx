import React from "react";
import CartCard from "./CartCard";
const CartCardList = ({ data,removeFromCart,increaseQuantity,decreaseQuantity }) => {
  return (
    <div>
      {data.map((post) => (
        <CartCard
        key={post._id}
        _id={post._id}
        pname={post.Productid.pname}
        price={post.Productid.price}
        quantity={post.quantity}
        size= {post.size}
        color = {post.color}
        image={post.Productid.image[0]}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      ))}
    </div>
  );
};
export default CartCardList;
