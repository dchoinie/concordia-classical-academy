import React from "react";
import ContactComponent from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import { SEO } from "../components/seo";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <PageTitle title="Contact" />
        <ContactComponent />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
