import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import RequestInformationComponent from "../../components/requestInformation";
import { SEO } from "../../components/seo";

const RequestInformation = () => {
  return (
    <>
      <SEO title="Request Information" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="Request Information" />
        <RequestInformationComponent />
      </div>
      <Footer />
    </>
  );
};

export default RequestInformation;
