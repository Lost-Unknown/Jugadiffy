import React from 'react'
import ProductFeed from '@components/ProductFeed'
import Link from 'next/link'

const Search = () => {
  return (
    <section>
        {/* Mobile Search */}
        <div className='md:hidden flex'>
            <div></div>
            <div></div>
            <ProductFeed />
        </div>
        {/* Desktop Search */}
        <div className='md:flex hidden w-full'>
            <div className=' w-1/12'>
                <p>Collection</p>
                <Link href="" className='dropdown_link'>All</Link>
            </div>
            <div className='w-10/12 px-12'>
                <ProductFeed />
            </div>
            <div className='w-1/12'>
                
            </div>
        </div>
    </section>
  )
}

export default Search
