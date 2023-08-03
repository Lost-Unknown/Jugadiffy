import React from 'react'
import Image from 'next/image'
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
            <div className=' md:w-2/5 w-full flex flex-col gap-1 p-16'>
              <h2 className=' text-zinc-200 text-5xl font-semibold font-sans'>{post.pname}</h2>
              <button className='text-white rounded-full bg-blue-600 w-fit p-2 mt-3'>₹{post.price}</button>
              <hr className='mt-8 mb-8 border-zinc-600' />
              <form className='flex flex-col gap-4'>
                <h3 className='text-white font-sans text-2xl font-semibold'>COLOR</h3>
                <div className=' block mb-4'>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>Black</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>White</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>Blue</button>
                </div>
                <h3 className='text-white font-sans text-2xl font-semibold'>SIZE</h3>
                <div className=' block mb-4'>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>XS</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>S</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>M</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>L</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>XL</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>XXL</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>XXXL</button> 
                </div>
                <p className='text-white'>{post.desc}</p>
                <button className='w-full bg-blue-600 rounded-full pt-4 pb-4 text-white'>Add To Cart</button>
              </form>
            </div>
       </div>
      </section> 
  )
}

export default ProductPage
