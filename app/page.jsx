"use client"
import ProductCard from "@components/ProductCard";
import ProductFeed from "@components/ProductFeed";
const Home = () => {
  return (
    <section>
    <div className=" md:flex-row flex-col w-full flex-center  gap-4 h-max flex  overflow-hidden">
      <div className="md:w-2/3 w-full">
        <ProductCard
          Name="Product 4"
          Price="1000000"
          Url="64cb66b2ba333e53bfb2c22d"
          ImageUrl="/assets/images/shoes-1.png"
         />
       </div>
      <div className="flex items-center justify-center flex-col gap-4  md:w-1/3 w-full h-auto">
        <ProductCard
          Name="Product 5"
          Price="1000000"
          Url="64cb69beba333e53bfb2c238"
          ImageUrl="/assets/images/shoes-1.png"
         / >
        <ProductCard
          Name="Product 1"
          Price="10000"
          Url="64cb750bec1f6ef97018eeb0"
          ImageUrl="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1200&q=75"
         / >
        </div>
      </div>
    </section>
  );
};

export default Home;
