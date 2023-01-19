import React from 'react'

interface SupplyList {
    grade: string;
    list: any;
}

const SupplyCard = ({ grade, list }: SupplyList) => {
  return (
    <div className='flex flex-col p-6 rounded shadow-lg border border-gray-200'>
        <h3 className="text-gray-800">{grade}</h3>
        <hr className="my-3 border border-gray-200 w-2/3" />
        {list.map((l: any) => (
            l.children.map((c: any) => (
                <p className='ml-3'>&#8226; {`${c.text}`}</p>
            ))
        ))}
    </div>
  )
}

export default SupplyCard