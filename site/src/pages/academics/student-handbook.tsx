import { graphql } from "gatsby";
import React from "react";
import HandbookCard from "../../components/handbookCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const StudentHandbook = ({ data }: any) => {
  return (
    <>
      <SEO title="Student Handbook" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Student Handbook" />
          <div className="my-24 grid grid-cols-2 gap-12">
            {data.handbook.edges.map((handbook: any) => (
              <HandbookCard
                key={handbook.node.section}
                section={handbook.node.section}
                description={handbook.node.description}
                extra={handbook.node.extraContent}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query HandbookQuery {
    handbook: allSanityHandbook(sort: { fields: section, order: ASC }) {
      edges {
        node {
          section
          id
          description
          extraContent {
            children {
              text
            }
          }
        }
      }
    }
  }
`;

export default StudentHandbook;
