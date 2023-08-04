"use client"
import { useState,useEffect } from "react"
import ProductCard from "./ProductCard"

const ProductCardList = ({data}) => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-full h-auto'>
      {data.map((post) => (
        <ProductCard
          key={post._id}
          Name = {post.pname}
          Price = {post.price}
          Url = {post._id}
          ImageUrl = {post.image[0]}
        />
      ))}
    </div>
  )
}

const ProductFeed = () => {
    const [ posts,setPosts] = useState([]);
    
    useEffect(() => {
      const fetchPosts = async () =>{
        const response = await fetch('/api/product');
        const data = await response.json();
        setPosts(data);
      }
  
      fetchPosts();  
    },[]);
    return (
        <section className="w-full">
          <ProductCardList
          data={posts} />
        </section>
      )
    }
    
    export default ProductFeed