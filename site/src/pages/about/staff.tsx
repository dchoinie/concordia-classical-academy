import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import StaffComponent from "../../components/staff";

const Staff = () => {
  return (
    <>
      <SEO title="Staff" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Staff" />
          <StaffComponent />
        </div>
      </Layout>
    </>
  );
};

export default Staff;
