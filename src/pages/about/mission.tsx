import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MissionComponent from "../../components/mission";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Mission = () => {
  return (
    <>
      <SEO title="Mission" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="Mission" />
        <MissionComponent />
      </div>
      <Footer />
    </>
  );
};

export default Mission;
