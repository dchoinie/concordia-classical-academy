import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Chapel = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Chapel" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Chapel" />
          <div className="my-24 flex flex-col lg:flex-row gap-12">
            <div className="flex w-full lg:w-1/2">
              <GatsbyImage
                image={data.chapel.childImageSharp.gatsbyImageData}
                alt="Chapel"
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-gray-700">
                Chapel services are held each Wednesday at 9:15 a.m. giving our
                students and teachers the opportunity to worship together.
                Students are encouraged to bring a chapel offering each week,
                which is sent to a Christian mission. We encourage friends,
                family, and congregational members to join us for chapel.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ChapelQuery {
    chapel: file(relativePath: { eq: "promo_thumbnail.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default Chapel;
