import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HoursComponent from "../../components/hours";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const Hours = () => {
  return (
    <>
      <SEO title="School Hours" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="School Hours" />
        <HoursComponent />
      </div>
      <Footer />
    </>
  );
};

export default Hours;
