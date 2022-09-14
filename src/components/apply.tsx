import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button/button";
import { StaticImage } from "gatsby-plugin-image";
import LutherRose from "../assets/images/luther-rose.png";

const Apply = () => {
  return (
    <div className="bg-primary w-full my-24">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <div className="flex">
          <StaticImage
            src="../assets/images/luther-rose.png"
            alt="Luther Rose"
            placeholder="blurred"
            height={90}
            className="mr-6 self-center"
          />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl self-center">
            <span className="block text-gray-100">Ready To Apply?</span>
            <span className="block text-accent">
              Begin the application process today.
            </span>
          </h2>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button
              label="Apply Now"
              endIcon={faAngleRight}
              link="/admissions/admission-process"
              theme="accent"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
