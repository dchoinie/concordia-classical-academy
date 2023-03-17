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
                At Concordia Classical Academy it costs $6,500 to educate a
                student. We are fortunate to be a mission of Good Shepherd
                Lutheran Church. Each student receives the Good Shepherd
                Scholarship. This provides a significant discount to each
                student.
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
                To apply for tuition assistance, click the button below to
                download the Tuition Assistance Application form and return to
                the CCA office. Parents are invited to work with the Concordia
                Classical Academy School Board if the tuition is causing
                concerns. Contact 507.388.4336 or ccamankato@gmail.com.
              </p>
              <Button
                label="Download Tuition Assistance Application"
                theme="primary"
                startIcon={faDownload}
                href={Tuition_Assistance_Application}
                download
                classes={["self-start", "tracking-wider"]}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-24">
            {data.tuition.nodes.map((fee: TuitionFee) => (
              <FeeCard
                title={fee.title}
                fee={fee.fee}
                key={fee.id}
                id={fee.id}
                discount={fee.discount}
              />
            ))}
            {data.admin.nodes.map((fee: AdminFee) => (
              <FeeCard
                title={fee.title}
                fee={fee.fee}
                key={fee.id}
                id={fee.id}
              />
            ))}
          </div>
          <div className="my-24">
            <p className="italic text-center">
              Monthly payments are made using Thrivent's Simply Giving® Tuition
              Payment Program
            </p>
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
