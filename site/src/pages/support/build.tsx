import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { SEO } from '../../components/seo';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants/constants';
import { formatPrice, getBuyButtonUrl } from '../../helpers/stripeHelpers';
import Button from '../../components/button/button';
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import * as styles from '../../styles/video.scss';

const buildButtons = [
  {
    name: 'Building For The Future - Level 1',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_1,
  },
  {
    name: 'Building For The Future - Level 2',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_2,
  },
  {
    name: 'Building For The Future - Level 3',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_3,
  },
  {
    name: 'Building For The Future - Level 4',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_4,
  },
  {
    name: 'Building For The Future - Level 5',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_5,
  },
  {
    name: 'Building For The Future - Level 6',
    url: Constants.BUILDING_FOR_THE_FUTURE_LEVEL_6,
  },
];

const Build = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title='Building To Serve Campaign' />
      <Layout>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <PageTitle title='Building To Serve' />
          <div className='mb-24'>
            <div
              className='relative w-full'
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src='https://www.youtube.com/embed/06RUpzX4VZU?rel=0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='shadow-lg rounded absolute top-0 left-0 w-full h-full border-none'
              />
            </div>
          </div>
        </div>
        {/* content starts */}
        <div className="relative my-24">
          <GatsbyImage image={data.allSchool.childImageSharp.gatsbyImageData} alt="CCA Kids" className='hidden lg:block h-screen' />
          <div className="absolute top-0 lg:h-screen bg-darkOverlay w-full" />
          <div className="lg:max-w-screen-xl mx-6 lg:mx-auto left-0 right-0 lg:absolute top-0">
            <div className='flex flex-col lg:flex-row gap-12 my-24 bg-lightOverlay rounded'>
              <div className='flex flex-col w-full lg:w-1/2 justify-center lg:p-12'>
                <h2 className='font-bold text-primary text-4xl'>
                  Building To Serve Campaign
                </h2>
                <hr className='my-6 border border-accent w-1/2' />
                <p className='text-text text-lg mb-6'>
                  In the past 2 years at CCA, we have grown from 20 students to
                  over 80. Families are clearly looking for their children to hear
                  what is true, beautiful and good. We do not currently have the
                  space for them all. Phase one of our building project will
                  include adding 6 new classrooms.
                </p>
              </div>
              <div className='flex flex-col justify-center self-center w-full lg:w-1/2'>
                <div className='flex flex-col bg-primary rounded-tr rounded-br shadow-lg p-12'>
                  <h3 className='text-white font-bold text-center'>
                    How can you help?
                  </h3>
                  <hr className='my-3 border border-accent w-2/3 mx-auto' />
                  <p className='text-gray-200 mb-6'>
                    We need your prayers for our school, teachers, students and
                    families. Pray that God will provide the materials we need.
                    Consider giving a gift to our building project after you
                    support your church. Pray for God's guidance as we move into
                    this plan for expansion.
                  </p>
                  <h5 className='my-3 text-gray-300'>
                    Monthly Recurring Donations
                  </h5>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                    {data.buildPrice.nodes.map((node: any) => (
                      <a
                        href={getBuyButtonUrl(node.product.name, buildButtons)}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='rounded shadow-lg px-2 py-3 bg-white text-primary text-center'
                      >{`Donate ${formatPrice(node.unit_amount)} / mo.`}</a>
                    ))}
                  </div>
                  <h5 className='mb-3 text-white'>One-Time Donation</h5>
                  <div className='flex self-start mb-6'>
                    <Button
                      label='Donate Now'
                      href={
                        Constants.BUILDING_FOR_THE_FUTURE_CONTRIBUTION_ONE_TIME
                      }
                      theme='white'
                      endIcon={faHandHoldingDollar}
                    />
                  </div>
                  <small className='text-gray-200'>
                    *To make a recurring donation in an amount not listed above,
                    please contact us at{' '}
                    <a href={`mailto:${data.site.siteMetadata.email}`}>
                      {data.site.siteMetadata.email}
                    </a>
                    &nbsp; or call{' '}
                    <a href={`tel:${data.site.siteMetadata.phone}`}>
                      {data.site.siteMetadata.phone}
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query BuildQuery {
    build: file(relativePath: { eq: "build.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    buildPrice: allStripePrice(
      filter: {
        product: { name: { glob: "Building For The Future - Level *" } }
      }
      sort: { product: { name: ASC } }
    ) {
      nodes {
        active
        id
        currency
        unit_amount
        product {
          name
          id
        }
      }
    }
    site {
      siteMetadata {
        email
        phone
      }
    }
    allSchool: file(relativePath: { eq: "allSchool.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default Build;
