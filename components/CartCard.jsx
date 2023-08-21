import React from "react";
import Image from "next/image"; // Make sure to import the Image component

const CartCard = ({
  _id,
  pname,
  price,
  price2,
  quantity,
  image,
  size,
  color,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const handleIncrease = () => {
    increaseQuantity(_id);
  };

  const handleDecrease = () => {
    decreaseQuantity(_id);
  };

  const handleRemove = () => {
    removeFromCart(_id);
  };
  return (
    <div className="flex h-40 w-full py-2 justify-start">
      <Image
        src={image}
        alt="ProductImage"
        width={400}
        height={400}
        className="h-full w-36"
      />
      <div className="flex flex-col w-full">
        <div className="pl-2 text-left gap-2">
            <h2 className="font-semibold text-xl">{pname}</h2>
          <div className=" flex gap-2">
            <h2 className="text-md font-bold">₹{price}</h2>
            <h2 className="text-md text-zinc-500 font-semibold line-through">₹{price2}</h2>
            <h2 className="text-md font-bold text-green-500">{(price2/price)*100 -100}% Off</h2>
          </div>
          <div className="flex w-full flex-col justify-start   ">
            <div className="flex items-center">
              <h1 className="text-md text-zinc-400 pr-1">Colour:</h1>
              <h1 className="text-md"> {color}</h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-md text-zinc-400 pr-1">Size:</h1>
              <h1 className="text-md"> {size}</h1>
            </div>
          </div>
        </div>
        <div className=" flex-grow"></div>
        <div className="flex flex-row justify-between gap-6 px-2">
          <div className="flex border border-zinc-400 overflow-hidden rounded-md justify-center items-center">
            <button
              className=" text-center sm:w-10 w-6 font-bold h-6 md:h-8"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className=" text-center  sm:w-10 w-6 p-1  border-l border-zinc-400">
              {quantity}
            </p>
            <button
              className=" text-center sm:w-10 w-6 font-bold h-6 md:h-8 border-l border-zinc-400"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 sm:gap-6">
            <button className="cursor-pointer text-blue-800 underline font-semibold underline-offset-2" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
