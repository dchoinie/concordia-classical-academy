import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "./button/button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Build = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BuildCompQuery {
      triple: file(relativePath: { eq: "triple.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);
  return (
    <div className="my-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-primary">
          Building For The Future
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="flex w-full lg:w-1/2">
            <GatsbyImage
              image={data.triple.childImageSharp.gatsbyImageData}
              alt="Build"
              className="rounded shadow-lg"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <p>
              Praise God for all the work that has been done! Please continue to
              pray for this process and consider giving towards the buliding
              fund during this triple matching time. Teachers are also starting
              to dream about how to set up these spaces when they are complete.
            </p>
            <p className="py-6">
              To learn more about our building project and to donate, follow the
              link below
            </p>
            <Button
              label="Building Project Info"
              theme="primary"
              link="/support/build"
              endIcon={faAngleRight}
              classes={["self-start"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
