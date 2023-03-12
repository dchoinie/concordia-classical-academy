import { PortableText } from '@portabletext/react';
import React from 'react'

interface SupplyList {
    grade: string;
    content: any;
}

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <ul className="mt-xl">{children}</ul>,
    number: ({children}: any) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
  },
}

const SupplyCard = ({ grade, content }: SupplyList) => {
  return (
    <div className='flex flex-col p-6 rounded shadow-lg border border-gray-200'>
        <h3 className="text-gray-800">{grade}</h3>
        <hr className="my-3 border border-gray-200 w-2/3" />
        <PortableText value={content} components={components} />
    </div>
  )
}

export default SupplyCard