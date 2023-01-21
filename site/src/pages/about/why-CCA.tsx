import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import WhyCCAComponent from "../../components/why-cca";

const WhyCCA = (): JSX.Element => {
  return (
    <>
      <SEO title="Why CCA?" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Why CCA?" />
          <WhyCCAComponent />
        </div>
      </Layout>
    </>
  );
};

export default WhyCCA;
