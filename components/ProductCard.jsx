import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ Name, Price, Price2, Url, ImageUrl, Colour, Size }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/?id=${Url}`)}
      className="flex items-Start flex-col justify-center p-card overflow-hidden flex-grow hover:border-blue-500 border border-zinc-700 bg-white rounded-lg cursor-pointer w-full"
    >
      <div className="hidden">{Colour}</div>
      <div className="hidden">{Size}</div>
      <div className="flex overflow-hidden md:h-5/6">
        <Image
          src={ImageUrl}
          width={800}
          height={1000}
          className="hover:scale-110 h-full transition scale-100 duration-300 w-full"
        />
      </div>
      <div className="flex flex-col h-1/6 p-0.5  w-full bg-white">
        <p className="font-semibold text-black md:text-md text-sm text-left pl-3 py-0.5 ">
          {Name}
        </p>
        <div className="flex pl-3 md:py-0.5 py-0  gap-2 items-end">
          <p className="text-black md:text-md text-sm">₹{Price}</p>
          <p className="text-zinc-700 md:text-sm line-through">{Price2}</p>
          <p className="text-green-500 md:text-md text-sm  font-semibold">{((Price2/Price)*100)-100}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
