import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import WhatIsClassicalEducationComponent from "../../components/what-is-classical-education";

const WhatIsClassicalEducation = () => {
  return (
    <>
      <SEO title="What Is Classical Education?" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="What Is Classical Education?" />
          <WhatIsClassicalEducationComponent />
        </div>
      </Layout>
    </>
  );
};

export default WhatIsClassicalEducation;
