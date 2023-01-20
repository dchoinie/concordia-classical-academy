import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button/button";
import { StaticImage } from "gatsby-plugin-image";
import LutherRose from "../assets/images/luther-rose.png";

const Apply = () => {
  return (
    <div className="bg-primary w-full my-24">
      <div className="lg:max-w-screen-xl py-12 mx-6 lg:mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-full lg:flex-row">
          <StaticImage
            src="../assets/images/luther-rose.png"
            alt="Luther Rose"
            placeholder="blurred"
            height={90}
            className="lg:mr-6 self-center"
          />
          <h2 className="text-3xl font-bold sm:text-4xl self-center text-center lg:text-left">
            <span className="block text-gray-100">Ready To Apply?</span>
            <span className="block text-accent">
              Begin the application process today.
            </span>
          </h2>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex justify-center w-full lg:justify-start lg:w-auto rounded-md shadow">
            <Button
              label="Apply Now"
              endIcon={faAngleRight}
              link="/admissions/admission-process"
              theme="accent"
              size="large"
              classes={['self-center']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
