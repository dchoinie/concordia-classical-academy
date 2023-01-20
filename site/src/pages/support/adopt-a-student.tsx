import React from "react";
import AdpotAStudentComponent from "../../components/adopt-a-student";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const AdpotAStudent = () => {
  return (
    <div>
      <SEO title="Adpot-A-Student" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="Adopt-A-Student"
            subTitle="The grass withers, the flower fades, but the word of God will stand forever. Isaiah 40:8"
          />
          <AdpotAStudentComponent />
        </div>
      </Layout>
    </div>
  );
};

export default AdpotAStudent;
