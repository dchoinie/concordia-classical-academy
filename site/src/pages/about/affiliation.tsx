import React from "react";
import AffiliationComponent from "../../components/affiliation";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Affiliation = (): JSX.Element => {
  return (
    <>
      <SEO title="Affiliation" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="Affiliation"
            subTitle="Concordia Classial Academy is a ministry of Good Shepherd Lutheran Church"
          />
          <AffiliationComponent />
        </div>
      </Layout>
    </>
  );
};

export default Affiliation;
