import {
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, PageProps } from "gatsby";
import React from "react";
import Button from "../../components/button/button";
import StudentApplicationForm from "../../assets/documents/student_application_form.pdf";
import { MetadataProps } from "../../types/common";
import { SEO } from "../../components/seo";
import PageTitle from "../../components/pageTitle";
import Layout from "../../components/layout";
import Constants from "../../constants/constants";

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        email
        phone
      }
    }
  }
`;

const AdmissionProcess = ({ data }: PageProps<MetadataProps>): JSX.Element => {
  return (
    <>
      <SEO title="Admissions Process" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle
            title="Admissions Process"
            subTitle="Follow the simple steps below to begin the process of enrolling your child/children at CCA. We look forward to meeting you!"
          />
          <div className="my-24">
            <iframe src={Constants.ADMISSIONS} width="100%" height="1200" className="shadow-lg"></iframe>
          </div>
          <div className="my-12 max-w-xl mx-auto">
            <p className="italic text-text text-sm text-center">
              Disclaimer: Concordia Classical Academy admits students of any race,
              color, national and ethnic origin to all the rights, privileges,
              programs, and activities generally accorded or made available to
              students at the school. It does not discriminate on the basis of
              race, color, national and ethnic origin in administration of its
              educational policies, admissions policies, scholarship and loan
              programs, athletic and other school administered programs.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdmissionProcess;
