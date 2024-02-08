import React from 'react'

const Empty = ({ header, par }) => {
    return (
        <div className=' h-full bg-white text-[#0F1035] flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold'>{header}</h1>
            <p className='px-4 text-lg font-medium text-center mt-3'>{par}</p>
        </div>
    )
}

export default Empty
