import React from "react";
import Apply from "../components/apply";
import ClassicalEducation from "../components/classicalEducation";
import Events from "../components/events";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import Testimonials from "../components/testimonials";
import Welcome from "../components/welcome";
import Build from "../components/build";

const index = (): JSX.Element => {
  return (
    <>
      <SEO title="Concordia Classical Academy" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          <Welcome />
          <ClassicalEducation />
        </div>
        <Apply />
        <div className="max-w-screen-xl mx-auto">
          <Build />
          <Events />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
};

export default index;
