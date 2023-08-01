"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <section className=" md:flex-row flex-col w-full flex-center gap-4 h-max flex  overflow-hidden">
      <div className="flex items-center justify-center max-h-max aspect-square h-full flex-grow hover:border-blue-500 border border-zinc-700 bg-black rounded-lg cursor-pointer  md:w-2/3 w-full">
        <Image
          src="/assets/images/t-shirt.avif"
          onClick={()=>router.push("/product?id=64c924362b5da02c872f493c")}
          width={800}
          height={800}
          className="hover:scale-125 transition scale-110 duration-300 h-auto"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-4  md:w-1/3 w-full h-auto">
        <div className="flex items-center justify-center aspect-square  hover:border-blue-500 border w-full rounded-lg  border-zinc-700 bg-black cursor-pointer overflow-hidden ">
          <Image
            src="/assets/images/t-shirt.avif"
            onClick={()=>router.push("/product?id=64c927a26d7f55a0faa08f6a")}
            width={400}
            height={400}
            className="hover:scale-125 transition duration-300"
          />
        </div>
        <div className="flex items-center justify-center aspect-square  hover:border-blue-500 border w-full rounded-lg  border-zinc-700 bg-black cursor-pointer overflow-hidden ">
          <Image
            src="/assets/images/t-shirt.avif"
            onClick={()=>router.push("/product?id=64c927fb6d7f55a0faa08f6c")}
            width={400}
            height={400}
            className="hover:scale-125 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;