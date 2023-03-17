import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import moment from 'moment';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle';
import { PortableText } from '@portabletext/react';
import { SEO } from '../components/seo';

const EventTemplate = ({ data }: any): JSX.Element => {
  const startDate = moment(data.event.startDate).format('MMM. DD, YYYY');
  const startTime = moment(data.event.startDate).format('h:mma');
  const endDate = moment(data.event.endDate).format('MMM. DD, YYYY');
  const endTime = moment(data.event.endDate).format('h:mma');
  return (
    <>
      <SEO title={data.event.name} />
      <Layout>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <PageTitle title={data.event.name} />
          <div className='flex flex-col lg:flex-row gap-12 my-12'>
            <div className='flex w-full lg:w-1/2'>
              <GatsbyImage
                image={data.event.image.asset.gatsbyImageData}
                alt={data.event.name}
              />
            </div>
            <div className='flex flex-col w-full lg:w-1/2'>
              <div className='flex mb-2'>
                <span className='underline mr-2'>Start Date:</span>
                <span>{startDate}</span>
              </div>
              {startDate === endDate ? (
                <div className='flex mb-2'>
                  <span className='underline mr-2'>Time:</span>
                  <span>
                    {startTime} - {endTime}
                  </span>
                </div>
              ) : (
                <>
                  <div className='flex mb-2'>
                    <span className='underline mr-2'>Start Time:</span>
                    <span>{startTime}</span>
                  </div>
                  <div className='flex mb-2'>
                    <span className='underline mr-2'>End Date:</span>
                    <span>{endDate}</span>
                  </div>
                  <div className='flex mb-2'>
                    <span className='underline mr-2'>End Time:</span>
                    <span>{endTime}</span>
                  </div>
                </>
              )}
              <div className='flex mb-2'>
                <span className='underline mr-2'>Location:</span>
                <span>{data.event.location}</span>
              </div>
              <hr className="my-3 border border-gray-200 w-1/2" />
              <PortableText value={data.event._rawDetails} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    event: sanityEvent(slug: { current: { eq: $slug } }) {
      startDate
      endDate
      id
      image {
        asset {
          gatsbyImageData(width: 700)
        }
      }
      name
      location
      _rawDetails
    }
  }
`;

export default EventTemplate;
