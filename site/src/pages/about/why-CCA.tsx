import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import WhyCCAComponent from "../../components/why-cca";

const WhyCCA = () => {
  return (
    <>
      <SEO title="Why CCA?" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Why CCA?" />
          <WhyCCAComponent />
        </div>
      </Layout>
    </>
  );
};

export default WhyCCA;
