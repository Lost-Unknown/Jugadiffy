"use client"
import React from 'react'
import Image from 'next/image'

const ProductPage = () => {
  return (
    <section className=' w-full'>
        <div className='flex w-full md:flex-row flex-col p-1 bg-black border border-zinc-700 rounded-xl'>
            <div className=' md:w-3/5 w-full flex flex-center'>
              <Image 
                src="/assets/images/t-shirt.avif"
                width={800}
                height ={800}
                className="aspect-square"
              />
            </div>
            <div className=' md:w-2/5 w-full flex flex-col gap-1 p-16'>
              <h2 className=' text-zinc-200 text-5xl font-semibold font-sans'>Acme Circles T-Shirt</h2>
              <button className='text-white rounded-full bg-blue-600 w-fit p-2 mt-3'>$20.00USD</button>
              <hr className='mt-8 mb-8 border-zinc-600' />
              <form className='flex flex-col gap-4'>
                <h3 className='text-white font-sans text-2xl font-semibold'>COLOR</h3>
                <div className='flex gap-2  mb-4'>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>Black</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>White</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>Blue</button>
                </div>
                <h3 className='text-white font-sans text-2xl font-semibold'>SIZE</h3>
                <div className='flex gap-2  mb-4'>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>XS</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12 pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>S</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>M</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>L</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>XL</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>XXL</button>
                  <button type='radio' className='pl-2 pr-2 pt-1 min-w-12  pb-1 w-12 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:border hover:scale-110 transition hover:border-blue-600'>XXXL</button>
                </div>
                <p className='text-white'>60% combed ringspun cotton/40% polyester jersey tee.</p>
                <button className='w-full bg-blue-600 rounded-full pt-4 pb-4 text-white'>Add To Cart</button>
              </form>
            </div>
       </div>
       
      <h1 className='text-white font-bold text-2xl mt-8 mb-4'>Related Products</h1>
       
      </section> 
  )
}

export default ProductPage
