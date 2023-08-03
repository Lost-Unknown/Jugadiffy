import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProductCard = ({Name,Price,Url,ImageUrl}) => {
  const router = useRouter();
  return (
  <div className="flex items-center relative justify-center max-h-max aspect-square h-full overflow-hidden flex-grow hover:border-blue-500 border border-zinc-700 bg-black rounded-lg cursor-pointer w-full">
  <Image
    src={ImageUrl}
    onClick={()=>router.push(`/product/?id=${Url}`) }
    width={800}
    height={800}
    className="hover:scale-100 transition scale-90 duration-300 h-full w-full"
  />
    <div className='flex border border-zinc-500 absolute p-0.5 left-4 bottom-4 rounded-full w-max bg-black'>
        <p className='font-semibold text-white text-sm text-center pl-3 py-2 '>{Name}</p>
        <button className='bg-blue-600 py-2 px-4 rounded-full ml-2 text-white font-semibold text-sm'>₹{Price}</button>
      </div>
    </div>
  )
}

export default ProductCard
