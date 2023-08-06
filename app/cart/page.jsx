"use client"
import React from "react";
import CartCardList from "@components/CartCardList";
import { useState ,useEffect } from "react";
import { useSession } from "next-auth/react";
const CartPage = () => {
  const {data:session} = useSession();
  const [ posts,setPosts] = useState([]);
  const [UserId,setUserId] = useState(null);
  useEffect(() => {
    // Set the userId when the session data is available
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (UserId) {
          const response = await fetch(`/api/cart/${UserId}`);
          if (!response.ok) {
            // Handle the case when the response is not successful (e.g., 404 or 500)
            console.error("Error fetching cart items:", response.statusText);
            return;
          }
          const data = await response.json();
          console.log(data.cart);
          setPosts(data.cart);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    // Call fetchItems when userId is available
    if (UserId) {
      fetchItems();
    }
  }, [UserId]);
  return (
    <section className="md:m-8 m-2 ">
      <h1 className="text-zinc-800 font-semibold mb-3 text-4xl font-sans">
        Shopping Cart
      </h1>
      <div className="flex md:flex-row flex-col">
        <div className="flex md:w-3/5 w-full md:mr-2 flex-col">
          <CartCardList
          data={posts}
           />
        </div>
        <div className="flex md:w-2/5 w-full flex-col bg-zinc-100 rounded-lg  mt-8 md:mt-0">
          <div className="md:p-12 md:w-full mt-2 mb-4 md:mt-0 md:mb-2  w-11/12 mr-auto ml-auto md:ml-0 p-1 flex flex-col md:gap-2 gap-1">
            <h2 className="text-zinc-800 text-xl">Order Summary</h2>
            <div className="flex flex-between text-zinc-800 pt-2 pb-2">
              <p className=" font-thin">Subtotal</p>
              <p className="font-semibold ">₹0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-zinc-800 pt-2 pb-2">
              <p className=" font-thin">Shipping Estimate</p>
              <p className="font-semibold ">₹0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-zinc-800 pt-2 pb-2">
              <p className=" font-thin">Tax estimate</p>
              <p className="font-semibold ">₹0.00</p>
            </div>
            <hr className="border-zinc-500" />
            <div className="flex flex-between text-zinc-800 pt-2 pb-2">
              <p className=" ">Order total</p>
              <p className="font-semibold ">₹0.00</p>
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
