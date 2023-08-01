"use client";

import { useEffect, useState } from "react";
import {useSearchParams } from "next/navigation";
import ProductPage from "@components/Productpage";

const ViewProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [post, setPost] = useState({pname: "", price: "",desc:"" });


    useEffect(()=>{
      const getProductDetails  = async() =>{
        const response  = await fetch(`/api/product/${productId}`)
        const data = await response.json();

        setPost({
          pname:data.pname,
          price:data.price,
          desc:data.desc,
        })
      }

      if(productId) getProductDetails()
    },[productId])
  return (
    <ProductPage 
        post={post}
        setPost={setPost}
    />
  );
};

export default ViewProduct;
