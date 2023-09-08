import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Welcome = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query WelcomeQuery {
      theme: file(relativePath: { eq: "2024_theme.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
      students: file(relativePath: { eq: "cca_students_2023.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);

  const getSchoolYear = () => {
    return `${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`;
  };

  return (
    <div className="my-24 mx-6 lg:mx-0">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-primary">{`Welcome to the ${getSchoolYear()} school year!`}</h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="flex w-full mb-12 lg:mb-0 lg:w-1/2">
            <GatsbyImage
              image={data.theme.childImageSharp.gatsbyImageData}
              alt="Theme"
              className="rounded shadow-lg"
            />
          </div>
          <div className="flex w-full lg:w-1/2">
            <GatsbyImage
              image={data.students.childImageSharp.gatsbyImageData}
              alt="Theme"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
