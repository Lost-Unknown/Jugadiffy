import React from "react";
import CartCard from "./CartCard";
const CartCardList = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <CartCard
          _id={post._id}
          pname={post.Productid.pname}
          price={post.Productid.price}
          quantity={post.quantity}
          image={post.Productid.image[0]}
        />
      ))}
    </div>
  );
};
export default CartCardList;
