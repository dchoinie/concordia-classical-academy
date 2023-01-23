import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button/button";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Apply = () => {
  const data = useStaticQuery(graphql`
    query LutherRoseQuery {
      rose: file(relativePath: { eq: "luther-rose.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100)
        }
      }
    }
  `);
  return (
    <div className="bg-primary w-full my-24">
      <div className="lg:max-w-screen-xl py-12 mx-6 lg:mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-full lg:flex-row">
          <GatsbyImage
            image={data.rose.childImageSharp.gatsbyImageData}
            alt="Luther Rose"
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
          <div className="self-center">
            <Button
              label="Apply Now"
              endIcon={faAngleRight}
              link="/admissions/admission-process"
              theme="white"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
