import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const SpecialAlert = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SpecialAlertQuery {
      alert: allSanitySpecialAlert(filter: { active: { eq: true } }) {
        nodes {
          message
          id
        }
      }
    }
  `);
  if (data.alert.nodes.length >= 1) {
    return (
      <div className='bg-accent py-3'>
        <div className='max-w-screen-xl mx-auto'>
          <p className='text-center text-text'>
            {data.alert.nodes[0].message}
          </p>
        </div>
      </div>
    );
  }
  return <></>
};

export default SpecialAlert;
