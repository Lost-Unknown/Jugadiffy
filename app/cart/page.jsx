import React from "react";

const CartPage = () => {
  return (
    <section className="md:m-8 m-2 ">
      <h1 className="text-white font-semibold text-4xl font-sans">
        Shopping Cart
      </h1>
      <div className="flex md:flex-row flex-col ">
        <div className="flex md:w-3/5 w-full flex-col"> </div>
        <div className="flex md:w-2/5 w-full flex-col bg-zinc-700 rounded-lg md:mr-16 mt-8 md:mt-0">
          <div className="md:p-12 md:w-full mt-2 mb-4 md:mt-0 md:mb-2  w-11/12 mr-auto ml-auto md:ml-0 p-1 flex flex-col md:gap-2 gap-1">
            <h2 className="text-white text-xl">Order Summary</h2>
            <div className="flex flex-between text-white pt-2 pb-2">
              <p className=" font-thin">Subtotal</p>
              <p className="font-semibold ">$0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-white pt-2 pb-2">
              <p className=" font-thin">Shipping Estimate</p>
              <p className="font-semibold ">$0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-white pt-2 pb-2">
              <p className=" font-thin">Tax estimate</p>
              <p className="font-semibold ">$0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-white pt-2 pb-2">
              <p className=" ">Order total</p>
              <p className="font-semibold ">$0.00</p>
            </div>
            <button className="bg-blue-600 rounded-xl w-full p-3 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
CartPage;
