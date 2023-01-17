import React from "react";
import ContactComponent from "../components/contact";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import { SEO } from "../components/seo";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Contact" />
          <ContactComponent />
        </div>
      </Layout>
    </>
  );
};

export default Contact;