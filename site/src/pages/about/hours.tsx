import React from "react";
import HoursComponent from "../../components/hours";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Hours = () => {
  return (
    <>
      <SEO title="School Hours" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="School Hours" />
          <HoursComponent />
        </div>
      </Layout>
    </>
  );
};

export default Hours;
