import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import StaffCard, { StaffMember } from "../../components/staffCard";
import { log } from "console";

const Staff = ({ data }: any): JSX.Element => {
  console.log(data);

  return (
    <>
      <SEO title="Staff" />
      <Layout>
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Staff" />
          <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.staff.nodes.map((staff: StaffMember) => (
              <StaffCard
                key={`${staff.title}, ${staff.name}`}
                email={staff.email}
                name={staff.name}
                position={staff.position}
                title={staff.title}
                phone={staff.phone}
                headshot={staff.headshot}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query StaffQuery {
    staff: allSanityStaffMember(sort: { order: ASC }) {
      nodes {
        email
        name
        position
        title
        phone
        headshot {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Staff;
