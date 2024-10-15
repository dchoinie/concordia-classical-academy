import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../../components/button/button";
import FeeCard from "../../components/feeCard";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Tuition_Assistance_Application from "../../assets/documents/tuition_assistance_application.pdf";

interface TuitionFee {
  discount: number;
  fee: number;
  id: string;
  title: string;
}

interface AdminFee {
  fee: number;
  id: string;
  title: string;
}

const TuitionFinancialAssistance = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title="Tuition & Financial Assistance" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Tuition & Financial Assistance" />
          <div className="mt-24 mb-48 flex flex-col lg:flex-row gap-12">
            <div className="flex w-full lg:w-1/2">
              <GatsbyImage
                image={data.tuitionImage.childImageSharp.gatsbyImageData}
                alt="Chapel"
                className="rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="mb-4">
                The cost of educating each child is $6,700. The Lutheran Church
                of the Good Shepherd will provide a $2,500 scholarship for each
                child with the expectation they will sing on the designated
                Sundays during the year and participate in the fundraisers
                throughout the year. You may choose to opt out of singing and
                fundraising by paying the $2,500.
              </p>
              <p className="mb-4">
                There are additional discounts for families with 3+ students in
                first through eighth grade. Tuition assistance is also available
                on a needs-based program that works with a sliding scale, base
                on income. Pay your family&apos;s total tuition by cash or check
                no later than September 15 and receive a 5% discount of the
                total tuition due.
              </p>
              <p className="mb-4">
                Parents are invited to call Concordia Classical Academy at{" "}
                <a className="underline" href="tel:15073047430">
                  507-304-7430
                </a>{" "}
                or email at{" "}
                <a className="underline" href="mailto:ccamankato@gmail.com">
                  ccamankato@gmail.com
                </a>{" "}
                to inquire further about tuition cost and setting up an initial
                meeting with our Headmaster Pastor LaPlant. For tuition
                assistance inquiries please reach out to Pastor LaPlant at{" "}
                <a
                  className="underline"
                  href="mailto:pastor@ccamankato.education"
                >
                  pastor@ccamankato.education
                </a>
                .
              </p>
              <div className="grid grid-cols-2 w-1/2 p-2 text-center mb-4">
                <p className="p-2 border border-gray-100 underline">
                  # of Children
                </p>
                <p className="p-2 border border-gray-100 underline">Amount</p>
                <p className="p-2 border border-gray-100">1</p>
                <p className="p-2 border border-gray-100">$4200</p>
                <p className="p-2 border border-gray-100">2</p>
                <p className="p-2 border border-gray-100">$4200</p>
                <p className="p-2 border border-gray-100">3</p>
                <p className="p-2 border border-gray-100">$2200</p>
                <p className="p-2 border border-gray-100">4+</p>
                <p className="p-2 border border-gray-100">0</p>
              </div>
              <div>
                <p className="mb-2 text-gray-500">
                  *All new students including kindergarten receive an additional
                  $1,000 scholarship off the $4,200 tuition.
                </p>
                <p className="text-gray-500">
                  *In the event you withdraw your child early, all discounts
                  will be null and void.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    tuition: allSanityTuitionFees(sort: { order: ASC }) {
      nodes {
        id
        title
        fee
        discount
      }
    }
    admin: allSanityAdminFees {
      nodes {
        id
        title
        fee
      }
    }
    tuitionImage: file(relativePath: { eq: "tuition.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
  }
`;

export default TuitionFinancialAssistance;
