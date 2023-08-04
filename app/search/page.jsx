"use client"
import React from 'react'
import ProductFeed from '@components/ProductFeed'
import Link from 'next/link'
import { useState } from 'react'
const Search = () => {
    
  const [toogleDropdownPrice, settoggleDropdownPrice] = useState(false);
  const [toogleDropdownColour, settoggleDropdownColour] = useState(false);
  const [toogleDropdownSize, settoggleDropdownSize] = useState(false);
  const [toogleDropdownCategory, settoggleDropdownCategory] = useState(false);
  const [toogleDropdownFilter, settoggleDropdownFilter] = useState(false);


  return (
    <section>
        {/* Mobile Search */}
        <div className='md:hidden flex flex-col gap-2 justify-center items-center'>
            <div onClick={() => settoggleDropdownCategory((prev) => !prev)} className='w-full border rounded-md border-zinc-500 text-zinc-300 p-2'>
                <p>Category</p>
                {toogleDropdownCategory && ( 
                    <div className='flex flex-col'>
                    <Link href="" className='cat-link'>All</Link>
                    <Link href="" className='cat-link'>Men</Link>
                    <Link href="" className='cat-link'>Women</Link>
                    <Link href="" className='cat-link'>Kids</Link>
                    <Link href="" className='cat-link'>Mugs</Link>
                    <Link href="" className='cat-link'>Hoodies</Link>
                </div>
                )}

            </div>
            <div onClick={() => settoggleDropdownFilter((prev) => !prev)} className='w-full border rounded-md border-zinc-500 text-zinc-300 p-2'>
                <p>Filter</p>
                {toogleDropdownFilter && (
                    <div>
                <p onClick={() => settoggleDropdownPrice((prev) => !prev)} className='w-full text-zinc-300 p-2 text-xl ring-2 ring-zinc-950 rounded-md bg-zinc-700'>Price</p>
                {toogleDropdownPrice && (
                <div className="w-full flex flex-col">
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>Less than ₹500</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹500 - ₹1000</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹1000 - ₹1500</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹1500 - ₹2000</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>More than ₹2000</p>
                    </div>  
              </div>
            )}
            <p onClick={() => settoggleDropdownColour((prev) => !prev)} className='w-full text-zinc-300 p-2 ring-2 ring-zinc-950 rounded-md text-xl bg-zinc-700'>Colour</p>
                {toogleDropdownColour && (
                <div className="w-full flex flex-col">
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-black rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Black</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-white rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>White</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-red-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Red</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-pink-500 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Pink</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-purple-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Purple</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-blue-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Blue</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-green-400 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Green</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-yellow-400 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Yellow</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-orange-100 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Sand</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-blue-300 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Powder Blue</p>
                    </div>
              </div>
            )}
            <p onClick={() => settoggleDropdownSize((prev) => !prev)} className='w-full text-zinc-300 p-2 text-xl ring-2 ring-zinc-950 rounded-md bg-zinc-700'>Price</p>
                {toogleDropdownSize && (
              <div className="w-full flex flex-col">
                
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XS</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>S</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>M</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>L</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XL</p>
                    </div>  
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XXL</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XXXL</p>
                    </div>
              </div>
            )}
            </div>
            )}
            </div>
            <ProductFeed />
        </div>
        {/* Desktop Search */}
        <div className='md:flex hidden w-full'>
            <div className=' w-1/12'>
                <p className='text-zinc-300 p-1'>Collection</p>
                <div className='flex flex-col'>
                    <Link href="" className='cat-link'>All</Link>
                    <Link href="" className='cat-link'>Men</Link>
                    <Link href="" className='cat-link'>Women</Link>
                    <Link href="" className='cat-link'>Kids</Link>
                    <Link href="" className='cat-link'>Mugs</Link>
                    <Link href="" className='cat-link'>Hoodies</Link>
                </div>
            </div>
            <div className='w-9/12 px-12'>
                <ProductFeed />
            </div>
            <div className='w-2/12 max-h-96 overflow-y-auto overflow-x-hidden'>
                <p  className='text-zinc-300 p-1'>Filters</p>
                <hr className='my-4' />
                <p onClick={() => settoggleDropdownPrice((prev) => !prev)} className='w-full text-zinc-300 p-2 text-xl ring-2 ring-zinc-950 rounded-md bg-zinc-700'>Price</p>
                {toogleDropdownPrice && (
              <div className="w-full flex flex-col">
                
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>Less than ₹500</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹500 - ₹1000</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹1000 - ₹1500</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>₹1500 - ₹2000</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>More than ₹2000</p>
                    </div>  
              </div>
            )}
            <p onClick={() => settoggleDropdownColour((prev) => !prev)} className='w-full text-zinc-300 p-2 ring-2 ring-zinc-950 rounded-md text-xl bg-zinc-700'>Colour</p>
                {toogleDropdownColour && (
                <div className="w-full flex flex-col">
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-black rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Black</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-white rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>White</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-red-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Red</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-pink-500 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Pink</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-purple-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Purple</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-blue-600 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Blue</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-green-400 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Green</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-yellow-400 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Yellow</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-orange-100 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Sand</p>
                    </div>
                    <div className='flex p-2 item-center bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input className='' type="radio" />
                        <div className=' w-6 h-6 bg-blue-300 rounded-full ring-2 ring-zinc-950'></div>
                        <p className=''>Powder Blue</p>
                    </div>
              </div>
            )}
            <p onClick={() => settoggleDropdownSize((prev) => !prev)} className='w-full text-zinc-300 p-2 text-xl ring-2 ring-zinc-950 rounded-md bg-zinc-700'>Price</p>
                {toogleDropdownSize && (
              <div className="w-full flex flex-col">
                
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XS</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>S</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>M</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>L</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XL</p>
                    </div>  
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XXL</p>
                    </div>
                    <div className='flex p-2 bg-zinc-500 text-zinc-200 rounded-md gap-4'>
                        <input type="radio" />
                        <p>XXXL</p>
                    </div>
              </div>
            )}
            </div>
        </div>
    </section>
  )
}

export default Search
