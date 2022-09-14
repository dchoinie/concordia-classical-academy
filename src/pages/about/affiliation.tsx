import React from "react";
import AffiliationComponent from "../../components/affiliation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Affiliation = () => {
  return (
    <>
      <SEO title="Affiliation" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle
          title="Affiliation"
          subTitle="Concordia Classial Academy is a ministry of Good Shepherd Lutheran Church"
        />
        <AffiliationComponent />
      </div>
      <Footer />
    </>
  );
};

export default Affiliation;
