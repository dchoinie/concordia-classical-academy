import { Script } from "gatsby";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import RequestInformationComponent from "../../components/requestInformation";
import { SEO } from "../../components/seo";

const RequestInformation = () => {
  return (
    <>
      {/* <Script
        id="reCaptcha"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`}
      />
      <Script id="reCaptcha2" src="../utils/reCaptcha.js" /> */}
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
