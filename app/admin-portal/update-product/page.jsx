"use client";

import { useEffect, useState } from "react";
import { useRouter ,useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ pname: "", price: "" ,desc:"",image:[]});


    useEffect(()=>{
      const getProductDetails  = async() =>{
        const response  = await fetch(`/api/product/${productId}`)
        const data = await response.json();

        setPost({
            pname:data.pname,
            price:data.price,
            desc:data.desc,
            image:data.image
        })
      }

      if(productId) getProductDetails()
    },[productId])

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if(!productId) return alert("Product ID not found.")

    try {
      const response = await fetch(`/api/product/${productId}`, {
        method: "PATCH",
        body: JSON.stringify({
            pname:data.pname,
            price:data.price,
            desc:data.desc,
            image:data.image
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateProduct}
    />
  );
};

export default EditProduct;
