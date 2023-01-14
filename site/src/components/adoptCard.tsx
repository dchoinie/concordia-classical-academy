import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button/button";

interface AdoptCard {
  name: string;
  price: number | string;
  url?: string;
}

const AdoptCard = ({ name, price, url }: AdoptCard) => {
  return (
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded shadow justify-between h-full">
      <div>
        <h4 className="text-primary font-bold mb-3 text-center">{name}</h4>
        <p className="text-text mb-3 text-center">
          {name === "Adopt-A-Student Level 6"
            ? `Donation Amount: ${price} (full tuition for 1 student)`
            : `Donation Amount: ${price}`}
        </p>
      </div>
      {url ? (
        <Button
          label="Donate"
          href={url}
          theme="primary"
          endIcon={faHandHoldingDollar}
          classes={["self-center"]}
        />
      ) : null}
    </div>
  );
};

export default AdoptCard;
