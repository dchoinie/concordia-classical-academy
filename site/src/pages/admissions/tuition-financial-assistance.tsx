import { graphql } from "gatsby";
import React from "react";
import FeeCard from "../../components/feeCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const TuitionFinancialAssistance = ({ data }: any) => {
  return (
    <>
      <SEO title="Tuition & Financial Assistance" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Tuition & Financial Assistance" />
          <div className="grid grid-cols-2 gap-12 my-24">
            {data.fees.edges.map((fee: any) => (
              <FeeCard
                title={fee.node.title}
                fee={fee.node.fee}
                key={fee.node.id}
                id={fee.node.id}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    fees: allSanityFees(sort: { fields: order, order: ASC }) {
      edges {
        node {
          id
          fee
          title
        }
      }
    }
  }
`;

export default TuitionFinancialAssistance;
