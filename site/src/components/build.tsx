import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "./button/button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Build = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query BuildCompQuery {
      library: file(relativePath: { eq: "library2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);
  return (
    <div className="my-24 mx-6 lg:mx-0">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-primary">
          New Building Addition
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="flex w-full lg:w-1/2">
            <GatsbyImage
              image={data.library.childImageSharp.gatsbyImageData}
              alt="Library"
              className="rounded shadow-lg"
            />
          </div>
          <div className="flex w-full lg:w-1/2">
            <p>
              We are thrilled to announce that our new building addition is now
              completed and ready for the upcoming school year, featuring six
              brand-new classrooms. We thank God for the abundant blessings He
              has provided to our school, enabling us to continue grow and serve
              our students with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
