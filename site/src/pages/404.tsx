import { Link } from "gatsby";
import React from "react";
import AdpotAStudentComponent from "../components/adopt-a-student";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import { SEO } from "../components/seo";

const AdpotAStudent = (): JSX.Element => {
  return (
    <div>
      <SEO title="404 Not Found" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="404 Not Found"
          />
          <div className="my-24 flex justify-center">
            <h5 className="text-text">
              Return to the
              <span className="mx-1">
                <Link className="underline hover:text-accent" to="/">Home Page</Link>
              </span>
              or
              <span className="mx-1">
                <Link className="underline hover:text-accent" to="/contact">Contact Us</Link>
              </span>
              if you can't find what you're looking for.
            </h5>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdpotAStudent;