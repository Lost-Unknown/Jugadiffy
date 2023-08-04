import React from 'react'
import Image from 'next/image'
import ChipList from './ColourList'
const ProductPage = ({post, setPost}) => {
  return (
    <section className=' w-full'>
        <div className='flex w-full md:flex-row flex-col p-1 bg-black border border-zinc-700 rounded-xl'>
            <div className=' md:w-3/5 w-full flex flex-center'>
              <Image 
                src={post.image[0]}
                width={800}
                height ={800}
                className="aspect-square"
              />
            </div>
            <div className=' md:w-2/5 w-full flex flex-col gap-1 md:p-16 p-4'>
              <h2 className=' text-zinc-200 text-5xl font-semibold font-sans'>{post.pname}</h2>
              <button className='text-white rounded-full bg-blue-600 w-fit p-2 mt-3'>₹{post.price}</button>
              <hr className='mt-8 mb-8 border-zinc-600' />
              <form className='flex flex-col gap-4'>
                <h3 className='text-white font-sans text-2xl font-semibold'>COLOR</h3>
                <ChipList 
                  data={post.colour}
                  value={post.colour}
                />
                <h3 className='text-white font-sans text-2xl font-semibold'>SIZE</h3>
                <ChipList 
                  data={post.size}
                  value={post.size}
                />
                <p className='text-white'>{post.desc}</p>
                <button className='w-full bg-blue-600 rounded-full pt-4 pb-4 text-white'>Add To Cart</button>
              </form>
            </div>
       </div>
      </section> 
  )
}

export default ProductPage
