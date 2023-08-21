"use client"
import { useState,useEffect } from "react"
import ProductCard from "./ProductCard"

const ProductCardList = ({data}) => {
  return (
    <div className='grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-full h-auto'>
      {data.map((post) => (
        <ProductCard
          key={post._id}
          Name = {post.pname}
          Price = {post.price}
          Price2 = {post.price2}
          Url = {post._id}
          ImageUrl = {post.image[0]}
          Colour = {post.colour}
          Size = {post.size}
        />
      ))}
    </div>
  )
}

const ProductFeed = ({category,product}) => {
    const [ posts,setPosts] = useState([]);
    let apiUrl;
    if(category==null){
    apiUrl =  `/api/search2/${product}`;
    }
    else if(product == null){
    apiUrl = category === "all" ? "/api/product" : `/api/search/${category}`;
    }
    useEffect(() => {
      const fetchPosts = async () => {

          const response = await fetch(apiUrl);
          const data = await response.json();
          setPosts(data);
      };
      fetchPosts();  
    },[apiUrl]);
    return (
        <section className="w-full">
          <ProductCardList
          data={posts} />
        </section>
      )
    }
    
    export default ProductFeed