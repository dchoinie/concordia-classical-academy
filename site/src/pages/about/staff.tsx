import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import { SEO } from "../../components/seo";
import StaffCard from "../../components/staffCard";

const Staff = ({ data }: any) => {
  return (
    <>
      <SEO title="Staff" />
      <Layout>
        <div className="max-w-screen-xl mx-auto">
          <PageTitle title="Staff" />
          <div className="my-24 grid grid-cols-4 gap-12">
            {data.staff.edges.map((staff: any) => (
              <StaffCard
                key={staff.node.name}
                email={staff.node.email}
                name={staff.node.name}
                position={staff.node.position}
                title={staff.node.title}
                imageUrl={staff.node.headshot.asset.url}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    staff: allSanityStaffMember(sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          email
          name
          position
          title
          headshot {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

export default Staff;
