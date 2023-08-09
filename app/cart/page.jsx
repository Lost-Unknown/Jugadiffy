"use client";
import React from "react";
import CartCardList from "@components/CartCardList";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
const CartPage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [UserId, setUserId] = useState(null);
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
  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the item from posts state
        setPosts(posts.filter((post) => post._id !== itemId));
        console.log("Cart item removed successfully");
      } else {
        console.error("Failed to remove cart item");
      }
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };
  const increaseQuantity = async (itemId) => {
    try {
      const updatedPosts = posts.map((post) => {
        if (post._id === itemId) {
          post.quantity += 1;
        }
        return post;
      });
  
      const response = await fetch(`/api/cart/${itemId}/increase`, {
        method: "PUT", // Use the PUT method for updates
      });
  
      if (response.ok) {
        setPosts(updatedPosts);
        // You can show a success message or update the UI accordingly
        console.log("Cart item quantity increased in the database");
      } else {
        // Handle error response from the server
        console.error("Failed to increase cart item quantity in the database");
      }
    } catch (error) {
      console.error("An error occurred while increasing cart item quantity:", error);
    }
  };
  
  const decreaseQuantity = async (itemId) => {
    try {
      const updatedPosts = posts.map((post) => {
        if (post._id === itemId && post.quantity > 1) {
          post.quantity -= 1;
        }
        return post;
      });
  
      const response = await fetch(`/api/cart/${itemId}/decrease`, {
        method: "PUT", // Use the PUT method for updates
      });
  
      if (response.ok) {
        setPosts(updatedPosts);
        // You can show a success message or update the UI accordingly
        console.log("Cart item quantity decreased in the database");
      } else {
        // Handle error response from the server
        console.error("Failed to decrease cart item quantity in the database");
      }
    } catch (error) {
      console.error("An error occurred while decreasing cart item quantity:", error);
    }
  };
  
  return (
    <section className="md:m-8 m-2 ">
      <h1 className="text-zinc-800 font-semibold mb-3 text-4xl font-sans">
        Shopping Cart
      </h1>
      <div className="flex md:flex-row flex-col">
        <div className="flex md:w-3/5 w-full md:mr-2 flex-col">
          <CartCardList
            data={posts}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
        <div className="flex md:w-2/5 w-full flex-col bg-slate-100 border border-zinc-300 rounded-lg  mt-8 md:mt-0">
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
