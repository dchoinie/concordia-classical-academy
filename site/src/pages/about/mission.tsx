import React from "react";
import Layout from "../../components/layout";
import MissionComponent from "../../components/mission";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Mission = () => {
  return (
    <>
      <SEO title="Mission" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Mission" />
          <MissionComponent />
        </div>
      </Layout>
    </>
  );
};

export default Mission;
