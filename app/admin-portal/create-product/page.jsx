"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateProduct = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ pname: "", price: "" ,desc:""});

  const createProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/product/new", {
        method: "POST",
        body: JSON.stringify({
          pname: post.pname,
          price: post.price,
          desc:post.desc
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
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createProduct}
    />
  );
};

export default CreateProduct;