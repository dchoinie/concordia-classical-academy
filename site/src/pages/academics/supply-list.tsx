import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import React from "react";
import Button from "../../components/button/button";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import SupplyCard from "../../components/supplyCard";
import SupplyListPDF from "../../assets/documents/Supply_List.pdf";

const SupplyList = ({ data }: any) => {
  return (
    <>
      <SEO title="Supply List" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Supply List" />
          <div className="my-24">
            <div className="flex justify-center mb-6">
              <Button
                label="Download Supply List"
                href={SupplyListPDF}
                theme="primary"
                size="large"
                endIcon={faDownload}
                download
              />
            </div>
            <div className="grid grid-cols-2 gap-12">
              {data.supplyList.edges.map((supply: any) => (
                <SupplyCard
                  grade={supply.node.grade}
                  list={supply.node.content}
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
  query MyQuery {
    supplyList: allSanitySupplyList(sort: { fields: grade, order: ASC }) {
      edges {
        node {
          id
          grade
          content {
            children {
              text
            }
          }
        }
      }
    }
  }
`;

export default SupplyList;
