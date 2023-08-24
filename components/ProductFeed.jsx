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

const ProductFeed = ({category,product,priceFilter,colorFilter,sizeFilter}) => {
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
          const colorPattern = new RegExp(colorFilter.map(color => `(${color})`).join("|"), "i");
          const sizePattern = new RegExp(sizeFilter.map(size => `(${size})`).join("|"), "i");
    
          // Apply filtering based on criteria using regex
          const filteredPosts = data.filter((post) => {
            const price = Number(post.price);
            if (priceFilter.includes("0") && price > 500) {
              return false;
            }
            if (priceFilter.includes("1") && (price <= 500 && price >= 1000)) {
              return false;
            }
            if (priceFilter.includes("2") && (price <= 1000 && price >= 1500)) {
              return false;
            }
            if (priceFilter.includes("3") && (price <= 1500 && price >= 2000)) {
              return false;
            }
            if (priceFilter.includes("4") && price <= 2000) {
              return false;
            }
    
            // Check color filter using regex
            if (colorFilter.length > 0 && !colorPattern.test(post.colour)) {
              return false;
            }
    
            // Check size filter using regex
            if (sizeFilter.length > 0 && !sizePattern.test(post.size)) {
              return false;
            }
    
            return true;
          });
    
          setPosts(filteredPosts);
        };
      fetchPosts();  
    },[apiUrl,priceFilter,colorFilter,sizeFilter]);
    return (
        <section className="w-full">
          <ProductCardList
          data={posts} />
        </section>
      )
    }
    
    export default ProductFeed