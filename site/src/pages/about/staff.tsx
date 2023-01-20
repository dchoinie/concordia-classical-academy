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
        <div className="max-w-screen-xl mx-6 lg:mx-auto">
          <PageTitle title="Staff" />
          <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.staff.edges.map((staff: any) => (
              <StaffCard
                key={staff.node.name}
                email={staff.node.email}
                name={staff.node.name}
                position={staff.node.position}
                title={staff.node.title}
                phone={staff.node.phone}
                // imageUrl={staff.node.headshot.asset.url}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    staff: allSanityStaffMember(sort: {fields: order, order: ASC}) {
      edges {
        node {
          email
          name
          position
          title
          phone
        }
      }
    }
  }
`

export default Staff;
