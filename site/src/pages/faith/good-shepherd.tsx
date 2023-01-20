import React from "react";
import AffiliationComponent from "../../components/affiliation";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const GoodShepherd = () => {
  return (
    <>
      <SEO title="Good Shepherd Lutheran Church" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="Good Shepherd"
            subTitle="Concordia Classial Academy is a ministry of Good Shepherd Lutheran Church"
          />
          <AffiliationComponent />
        </div>
      </Layout>
    </>
  );
};

export default GoodShepherd;
