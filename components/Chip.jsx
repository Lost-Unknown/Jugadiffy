"use client"

const Chip = ({text,value}) => {
    return (
        <button type='radio' value={value} className='pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md bg-zinc-800 text-white hover:ring-2 hover:ring-blue-600 transition'>{text}</button>
    )
}

export default Chip
