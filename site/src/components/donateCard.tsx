import React from "react";
import { formatPrice } from "../helpers/stripeHelpers";

interface DonateCard {
  name: string;
  price: number;
  url: string;
}

const DonateCard = ({ name, price, url }: DonateCard) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex border border-gray-200 px-8 py-4 justify-center rounded shadow-lg hover:bg-primary hover:text-white">
      <span className="whitespace-nowrap">{`Donate ${formatPrice(price)}`}</span>
    </a>
  );
};

export default DonateCard;
