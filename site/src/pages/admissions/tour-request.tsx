import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import TourRequestForm from "../../components/tourRequestForm";

const TourRequest = (): JSX.Element => {
  return (
    <>
      <SEO title="Tour Request" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Tour Request" />
          <div className="flex gap-12 my-24">
            <div className="flex w-1/2 flex-col">
              <h3 className="capitalize mb-6">
                Want to schedule a tour of CCA?
              </h3>
              <p>
                We would be happy provide a tour of our facilities and answer
                any questions you may have. To schedule a tour, please fill out
                the form and we will get back to you as soon as possible.
              </p>
            </div>
            <div className="flex w-1/2">
              <TourRequestForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TourRequest;
