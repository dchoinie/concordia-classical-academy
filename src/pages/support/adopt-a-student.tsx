import React from "react";
import AdpotAStudentComponent from "../../components/adopt-a-student";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";

const AdpotAStudent = () => {
  return (
    <div>
      <SEO title="Adpot-A-Student" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle
          title="Adopt-A-Student"
          subTitle="The grass withers, the flower fades, but the word of God will stand forever. Isaiah 40:8"
        />
        <AdpotAStudentComponent />
      </div>
      <Footer />
    </div>
  );
};

export default AdpotAStudent;
