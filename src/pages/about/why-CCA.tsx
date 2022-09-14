import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import WhyCCAComponent from "../../components/why-cca";

const WhyCCA = () => {
  return (
    <>
      <SEO title="Why CCA?" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="Why CCA?" />
        <WhyCCAComponent />
      </div>
      <Footer />
    </>
  );
};

export default WhyCCA;
