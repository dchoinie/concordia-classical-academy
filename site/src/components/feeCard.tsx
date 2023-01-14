import React from 'react'

export interface Fee {
    fee: string;
    id: string;
    title: string;
}

const FeeCard = ({ fee, id, title }: Fee) => {
  return (
    <div className='flex flex-col shadow-lg rounded p-6 border border-gray-200'>
        <h3 className='text-3xl text-gray-800'>{title}</h3>
        <hr className="my-3 border border-gray-200 w-2/3" />
        <p className='text-lg texty-gray-700'>{fee}</p>
    </div>
  )
}

export default FeeCard