import {
  faAngleRight,
  faCheckCircle,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button/button";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Constants from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="relative">
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
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
            <Button
              label="Apply Now"
              endIcon={faAngleRight}
              href={Constants.ADMISSIONS}
              theme="white"
              size="large"
              classes={["lg:self-center"]}
            />
          </div>
        </div>
      </div>
      {/* Now enrolling banner */}
      {/* <div className='absolute top-0 left-0 right-0 mx-auto bg-accentBackground border border-accent w-fit px-6 justify-center rounded-tl-2xl rounded-tr-2xl shadow-lg -mt-10 h-10 flex'>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className='text-accent bg-white rounded-full text-xl self-center mr-2'
        />
        <p className='self-center text-text'>
          Now enrolling for the 2023-24 school year
        </p>
      </div> */}
    </div>
  );
};

export default Apply;
