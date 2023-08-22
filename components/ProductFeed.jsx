"use client"
import { useState,useEffect } from "react"
import ProductCard from "./ProductCard"

const ProductCardList = ({data}) => {
  const isListEmpty = data.length ===0;
  return (
    <section>
      {isListEmpty ? (
      <div className="flex justify-center items-center h-96 w-full">
        <img className="w-full h-full object-contain" src="assets/images/noitem.png" alt="" />
      </div>):(
    <div className='grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1 w-full h-auto'>
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
      )}
      </section>
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