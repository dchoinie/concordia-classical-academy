import React from "react";
import HoursComponent from "../../components/hours";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Hours = (): JSX.Element => {
  return (
    <>
      <SEO title="School Hours" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="School Hours" />
          <HoursComponent />
        </div>
      </Layout>
    </>
  );
};

export default Hours;
