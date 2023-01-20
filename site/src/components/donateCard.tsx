import React from "react";

interface DonateCard {
  link: string;
  title: string;
}

const DonateCard = ({ title, link }: DonateCard) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex border border-gray-200 px-8 py-4 justify-center rounded shadow-lg hover:bg-primary hover:text-white">
      <span className="whitespace-nowrap">{title}</span>
    </a>
  );
};

export default DonateCard;
