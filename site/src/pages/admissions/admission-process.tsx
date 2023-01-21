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
          <section className="py-10 bg-white sm:py-16 lg:py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                  <img
                    className="w-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                    alt=""
                  />
                </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        1{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-primary md:mt-10">
                      Schedule A Visit
                    </h3>
                    <p className="my-4 text-base text-text">
                      Contact us to let us know you are interesting in learning
                      more about CCA. Will we schedule a visit where you can come
                      in and view our facilities, learn more about CCA, and get to
                      know us! You can schedule a visit through email or phone.
                    </p>
                    <div className="flex flex-col items-center text-text">
                      <a
                        href={`mailto:${data.site.siteMetadata.email}`}
                        className="flex"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="self-center mr-2"
                        />
                        <span>{data.site.siteMetadata.email}</span>
                      </a>
                      <p className="my-1">or</p>
                      <a href="tel:15073884336">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="self-center mr-2"
                        />
                        <span>{data.site.siteMetadata.phone}</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        2{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                      Student Application Form
                    </h3>
                    <p className="mt-4 text-base text-gray-600 mb-6">
                      Download our new student enrollment form and complete all
                      the information. Please be sure your Curriculum and
                      Registration Fee accompanies this form &#40;if not already
                      paid&#41;.
                    </p>
                    <Button
                      label="Download Application Form"
                      href={StudentApplicationForm}
                      theme="primary"
                      size="small"
                      startIcon={faDownload}
                      download
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        3{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                      Return Application Form
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Return the completed application form &#40;along with the
                      application fee&#41; to the front office at CCA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
