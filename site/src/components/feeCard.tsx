import React from "react";

export interface Fee {
  discount?: number;
  fee: string | number;
  id: string;
  title: string;
}

const FeeCard = ({ fee, id, title, discount }: Fee) => {
  return (
    <div className="flex flex-col shadow-lg rounded border border-gray-200">
      <div className="bg-primary p-6">
        <h3 className="text-2xl text-white text-center">{title}</h3>
      </div>
      {discount ? (
        <div className="p-6">
          <div className="flex text-lg text-gray-700 justify-between">
            <div className="flex flex-col items-center text-center">
              <p className="underline">Tuition Cost:</p>
              <p>${fee}</p>
            </div>
            <div className="text-4xl font-bold self-center">-</div>
            <div className="flex flex-col items-center text-center">
              <p className="underline">Good Shepherd Scholorship:</p>
              <p>${discount}</p>
            </div>
            <div className="text-4xl font-bold self-center">=</div>
            <div className="flex flex-col items-center text-center">
              <p className="underline font-bold">You Pay</p>
              <p className="font-bold">${Number(fee) - Number(discount)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <p className="text-lg texty-gray-700 text-center">{fee}</p>
        </div>
      )}
    </div>
  );
};

export default FeeCard;
