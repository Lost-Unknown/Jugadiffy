"use client"
import React from 'react'
import { Spinner } from '@material-tailwind/react'
const loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-96'>
      <Spinner className="h-12 w-12" />
    </div>
  )
}

export default loading
