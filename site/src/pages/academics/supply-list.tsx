import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import React from "react";
import Button from "../../components/button/button";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import SupplyCard, { SupplyList } from "../../components/supplyCard";
import SupplyListPDF from "../../assets/documents/Supply_List.pdf";

const SupplyListComponent = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Supply List" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Supply List" />
          <div className="my-24">
            <div className="flex justify-center mb-6">
              <Button
                label="Download Supply List"
                href={SupplyListPDF}
                theme="primary"
                startIcon={faDownload}
                download
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {data.supplyList.nodes.map((supply: SupplyList) => (
                <SupplyCard
                  _id={supply._id}
                  key={supply._id}
                  grade={supply.grade}
                  _rawContent={supply._rawContent}
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
  query SupplyQuery {
    supplyList: allSanitySupplyList(sort: { order: ASC }) {
      nodes {
        _id
        _type
        grade
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;

export default SupplyListComponent;
