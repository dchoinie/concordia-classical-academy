import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import StaffComponent from "../../components/staff";

const Staff = () => {
  return (
    <>
      <SEO title="Staff" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="Staff" />
        <StaffComponent />
      </div>
      <Footer />
    </>
  );
};

export default Staff;
