import React from "react";
import Button from "./button/button";

interface StaffCard {
  email: string;
  imageUrl: string;
  name: string;
  position: string;
  title: string;
}

const StaffCard = ({ name, title, imageUrl, position, email }: StaffCard) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3 mb-3">
        <img
          className="object-cover w-full h-56 shadow transition-all duration-300 transform group-hover:scale-125"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="font-bold text-primary mb-1">
          {title}. {name}
        </h5>
        <p className="mb-3">{position}</p>
        <Button
          theme="primary"
          size="small"
          label={`Email ${title}. ${name}`}
          href={`mailto:${email}`}
          disableTargetBlank
        />
      </div>
    </div>
  );
};

export default StaffCard;
