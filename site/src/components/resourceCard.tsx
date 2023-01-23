import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "./button/button";

export interface ResourceProps {
  category: string;
  image: any;
  link: string;
  title: string;
}

const ResourceCard = ({ category, image, link, title }: ResourceProps) => {
  return (
    <div className="flex flex-col p-6 rounded border border-gray-200 shadow-lg">
      <GatsbyImage image={image} alt={title} className="mb-4 self-start" />
      <h4>{title}</h4>
      <hr className="border border-gray-200 my-3 w-2/3" />
      <Button
        label="Visit"
        endIcon={faAngleRight}
        theme="primary"
        classes={["self-start"]}
        href={link}
      />
    </div>
  );
};

export default ResourceCard;
