import React from "react";
import Button from "./button/button";
import { GatsbyImage } from "gatsby-plugin-image";

export interface StaffMember {
  email: string;
  headshot: any;
  name: string;
  phone?: string;
  position: string;
  title: string;
}

const StaffCard = ({ name, title, headshot, position, email }: StaffMember) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3 mb-3">
        <GatsbyImage
          image={headshot.asset.gatsbyImageData}
          alt={name}
          className="object-cover w-full h-96 shadow transition-all duration-300 transform group-hover:scale-125"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <h3 className="font-bold text-primary">
            {title}. {name}
          </h3>
          <h5 className="my-1">{position}</h5>
        </div>
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
