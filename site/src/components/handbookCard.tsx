import React from "react";

interface HandbookContent {
  section: string;
  description: string;
  extra?: any;
}

const HandbookCard = ({ section, description, extra }: HandbookContent) => {
  return (
    <div className="flex flex-col p-6 rounded bg-gray-50 shadow-lg border border-gray-200">
      <h2 className="text-gray-800">{section}</h2>
      <hr className="my-3 border border-gray-200 w-1/2" />
      <p className="text-gray-700 mb-4">{description}</p>
      {extra && extra.map((e: any) => e.children.map((t: any) => (
        <div className="text-gray-700">{t.text}</div>
      )))}
    </div>
  );
};

export default HandbookCard;
