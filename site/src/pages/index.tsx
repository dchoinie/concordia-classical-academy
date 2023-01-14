import React from "react";
import Apply from "../components/apply";
import ClassicalEducation from "../components/classicalEducation";
import Events from "../components/events";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import Testimonials from "../components/testimonials";

const index = () => {
  return (
    <>
      <SEO title="Concordia Classical Academy" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          <ClassicalEducation />
        </div>
        <Apply />
        <div className="max-w-screen-xl mx-auto">
          <Events />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
};

export default index;
