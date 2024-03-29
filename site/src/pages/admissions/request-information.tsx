import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import RequestInformationComponent from "../../components/requestInformation";
import { SEO } from "../../components/seo";

const RequestInformation = (): JSX.Element => {
  return (
    <>
      <SEO title="Request Information" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Request Information" />
          <RequestInformationComponent />
        </div>
      </Layout>
    </>
  );
};

export default RequestInformation;
