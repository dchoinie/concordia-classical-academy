import { graphql } from "gatsby";
import React from "react";
import HandbookCard from "../../components/handbookCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import Button from "../../components/button/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Handbook from "../../assets/documents/CCA_Student_Parent_Handbook.pdf";

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
          <div className="my-24">
            <div className="flex justify-center mb-24">
              <Button
                label="Download Handbook"
                startIcon={faDownload}
                theme="primary"
                href={Handbook}
                download
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query HandbookQuery {
    handbook: allSanityHandbook(sort: { section: ASC }) {
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
  }
`;

export default StudentHandbook;
