import { PortableText } from "@portabletext/react";
import React from "react";

export interface RawContentChildren {
  marks: any[];
  text: string;
  _key: string;
  _type: string;
}
export interface RawContent {
  _key: string;
  _type: string;
  children: RawContentChildren[];
  level: number;
  listItem: string;
  markDefs: any[];
  style: string;
}

export interface SupplyList {
  grade: string;
  _rawContent: RawContent;
  _id: string;
}

const components = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-xl list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-6">{children}</li>,
  },
};

const SupplyCard = ({ grade, _rawContent }: SupplyList) => {
  return (
    <div className="flex flex-col p-6 rounded shadow-lg border border-gray-200 bg-gray-50">
      <h3 className="text-gray-800">{grade}</h3>
      <hr className="my-3 border border-gray-200 w-2/3" />
      <PortableText value={_rawContent} components={components} />
    </div>
  );
};

export default SupplyCard;
