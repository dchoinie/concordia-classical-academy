import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import WhatIsClassicalEducationComponent from "../../components/what-is-classical-education";

const WhatIsClassicalEducation = () => {
  return (
    <>
      <SEO title="What Is Classical Education?" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="What Is Classical Education?" />
        <WhatIsClassicalEducationComponent />
      </div>
      <Footer />
    </>
  );
};

export default WhatIsClassicalEducation;
