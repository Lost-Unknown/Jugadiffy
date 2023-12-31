"use client";

import { useEffect, useState } from "react";
import {useSearchParams } from "next/navigation";
import ProductPage from "@components/Productpage";

const ViewProduct =  () => {
  
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({id:"",pname: "", price: "",price2:"",desc:"",image:[],colour:[],size:[],category:[]});
  const [loading,setLoading] = useState(null)

    useEffect(()=>{
      const getProductDetails  = async() =>{
        setLoading(true)
        const response  = await fetch(`/api/product/${productId}`)
        const data = await response.json();

        setPost({
          id:productId,
          pname:data.pname,
          price:data.price,
          price2:data.price2,
          desc:data.desc,
          image:data.image,
          colour:data.colour,
          size:data.size,
          category:data.category
        })
        setLoading(false)
      }

      if(productId) getProductDetails()
    },[productId])
  return (
    <ProductPage 
        post={post}
        loading={loading}
        setPost={setPost}
        submitting={submitting}
    />
  );
};

export default ViewProduct;
