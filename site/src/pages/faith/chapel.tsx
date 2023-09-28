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
            <div className="grid grid-cols-1 w-full lg:w-1/2">
              <p className="mb-6">
                Chapel services are worship services. As such, this is an
                opportunity for everyone in our community to gather around the
                Word of God, and sing the hymns of faith. In other words, Chapel
                is not just for the kids, but for everyone. As you have
                opportunity, please gather with us for chapel.{" "}
              </p>
              <div className="flex flex-col mb-3">
                <h3 className="underline">Monday</h3>
                <p>8:15 - 8:30 AM</p>
              </div>
              <div className="flex flex-col mb-3">
                <h3 className="underline">Tuesday</h3>
                <p>8:15 - 8:30 AM</p>
              </div>
              <div className="flex flex-col mb-3">
                <h3 className="underline">Wednesday</h3>
                <p>8:30 - 9:00 AM</p>
              </div>
              <div className="flex flex-col mb-3">
                <h3 className="underline">Thursday</h3>
                <p>8:15 - 8:30 AM</p>
              </div>
              <div className="flex flex-col mb-3">
                <h3 className="underline">Friday</h3>
                <p>2:00 - 2:20 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ChapelQuery {
    chapel: file(relativePath: { eq: "chapel.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default Chapel;
