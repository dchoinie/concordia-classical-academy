import { graphql } from "gatsby";
import React from "react";
import HandbookCard from "../../components/handbookCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

interface HandbookChildren {
  text: string;
}

interface HandbookItem {
  section: string;
  id: string;
  description: string;
  extraContent: HandbookChildren;
}

const StudentHandbook = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Student Handbook" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Student Handbook" />
          <div className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.handbook.nodes.map((handbook: HandbookItem) => (
              <HandbookCard
                key={handbook.section}
                section={handbook.section}
                description={handbook.description}
                extra={handbook.extraContent}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`query HandbookQuery {
  handbook: allSanityHandbook(sort: {section: ASC}) {
    nodes {
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
}`;

export default StudentHandbook;
