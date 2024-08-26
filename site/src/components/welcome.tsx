import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Welcome = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query WelcomeQuery {
      theme: file(relativePath: { eq: "24_25_theme.jpg" }) {
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
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-bold mb-6 tracking-wider">
              Hebrews 12:1-3
            </p>
            <p className="text-xl">
              "Therefore, since we are surrounded by so great a cloud of
              witnesses, let us also lay aside every weight, and sin which
              clings so closely, and let us run with endurance the race that is
              set before us."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
