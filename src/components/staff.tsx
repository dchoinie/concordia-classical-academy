import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import StaffCard from "./staffCard";

const StaffComponent = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityStaffMember(sort: { fields: name }) {
        edges {
          node {
            email
            id
            headshot {
              asset {
                url
              }
            }
            name
            position
            title
          }
        }
      }
    }
  `);
  return (
    <div className="grid grid-cols-4 gap-x-12 gap-y-20 my-24">
      {data.allSanityStaffMember.edges.map((staff: any) => (
        <StaffCard
          key={staff.node.id}
          name={staff.node.name}
          title={staff.node.title}
          position={staff.node.position}
          imageUrl={staff.node.headshot.asset.url}
          email={staff.node.email}
        />
      ))}
    </div>
  );
};

export default StaffComponent;
