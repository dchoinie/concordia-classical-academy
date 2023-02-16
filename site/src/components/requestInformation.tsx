import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Script, useStaticQuery } from 'gatsby';
import React from 'react';
import Constants from '../constants/constants';

const RequestInformationComponent = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          address
          phone
          email
        }
      }
    }
  `);
  return (
    <div className='my-24'>
      <div className='flex flex-col lg:flex-row gap-12'>
        <div className='flex flex-col w-full lg:w-1/3'>
          <h2 className='text-primary font-bold mb-6'>
            Want more information?
          </h2>
          <p className='mb-6'>
            If you have any additional questions about tuition, classes,
            admissions, finanical assistance or anything else, please contact us
            and we will be happy to help!
          </p>
          <div className='flex mb-6'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className='mr-4 self-center text-primary'
            />
            <p>{data.site.siteMetadata.address}</p>
          </div>
          <div className='flex mb-6'>
            <FontAwesomeIcon
              icon={faPhone}
              className='mr-4 self-center text-primary'
            />
            <p>{data.site.siteMetadata.phone}</p>
          </div>
          <div className='flex mb-6'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='mr-4 self-center text-primary'
            />
            <p>{data.site.siteMetadata.email}</p>
          </div>
        </div>
        <div className='flex w-full lg:w-2/3'>
          <iframe src={Constants.REQUEST_INFO} width="100%" height="2250" className='shadow-lg'></iframe>
        </div>
      </div>
    </div>
  );
};

export default RequestInformationComponent;
