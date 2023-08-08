import React from 'react';
import Image from 'next/image'; // Make sure to import the Image component

const CartCard = ({ _id, pname, price, quantity, image ,size,color,removeFromCart,increaseQuantity,decreaseQuantity }) => {
  const handleIncrease = () => {
    increaseQuantity(_id);
  };

  const handleDecrease = () => {
    decreaseQuantity(_id);
  };

  const handleRemove = () => {
    removeFromCart(_id)
    ;
  };
  return (
    <div className="flex w-full px-6 py-2 sm:h-40 h-96 flex-col sm:flex-row rounded-xl justify-center items-center bg-zinc-100">
      <Image
        src={image}
        alt="ProductImage"
        width={400}
        height={400}
        className="sm:h-full h-full sm:w-36 w-full bg-zinc-600 overflow-hidden rounded-md"
      />
      <div className="pl-2 sm:h-full sm:w-auto w-full h-16 text-left">
        <h2 className="font-semibold text-2xl">{pname}</h2>
        <h2 className="text-xl">₹{price}</h2>
      </div>
      <div className="flex-grow"></div>
      <div className="flex flex-row sm:flex-col gap-6">
        <div className="flex overflow-hidden rounded-md justify-center items-center">
          <button className="bg-zinc-200 font-bold p-1 px-3" onClick={handleDecrease}>-</button>
          <p className="border-2 border-zinc-300 p-1 px-3">{quantity}</p>
          <button className="bg-zinc-200 font-bold p-1 px-3" onClick={handleIncrease}>+</button>
        </div>
        <div className="flex items-center justify-end gap-2 sm:gap-6">
          <p className="font-semibold text-lg">₹{quantity * price}</p>
          <Image
            src="/assets/images/cross.svg"
            width={30}
            height={30}
            alt="cross"
            className="cursor-pointer"
            onClick={handleRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;