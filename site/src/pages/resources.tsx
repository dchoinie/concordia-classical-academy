import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import ResourceCard, { ResourceProps } from "../components/resourceCard";
import { SEO } from "../components/seo";

const Resources = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Resources" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Resources" />
          <div className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.resources.nodes.map((resource: ResourceProps) => (
              <ResourceCard
                title={resource.title}
                link={resource.link}
                image={resource.image.asset.gatsbyImageData}
                category={data.category}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ResourcesQuery {
    resources: allSanityResources(sort: { title: ASC }) {
      nodes {
        category
        id
        image {
          asset {
            gatsbyImageData(height: 75)
          }
        }
        link
        title
      }
    }
  }
`;

export default Resources;
