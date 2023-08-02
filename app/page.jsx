"use client"
import ProductCard from "@components/ProductCard";
const Home = () => {
  return (
    <section className=" md:flex-row flex-col w-full flex-center gap-4 h-max flex  overflow-hidden">
      <ProductCard
        Name="Juta"
        Price="500"
        ImageUrl="/assets/images/t-shirt.avif"
        ObjectId="64c924362b5da02c872f493c"
       / >
      <div className="flex items-center justify-center flex-col gap-4  md:w-1/3 w-full h-auto">
        <ProductCard
          Name="Juta"
          Price="500"
          ImageUrl="/assets/images/t-shirt.avif"
          ObjectId="64c927a26d7f55a0faa08f6a"
         / >
        <ProductCard
          Name="Juta"
          Price="500"
          ImageUrl="/assets/images/shoes-1.avif"
          ObjectId="64c927fb6d7f55a0faa08f6c"
         / >
      </div>
    </section>
  );
};

export default Home;
