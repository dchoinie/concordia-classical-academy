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
import * as styles from "../../styles/video.scss";

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
      <SEO title='Building For The Future Campaign' />
      <Layout>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <PageTitle title='Building For The Future' />
          <div className='mb-24'>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src='https://www.youtube.com/embed/06RUpzX4VZU?rel=0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='shadow-lg rounded absolute top-0 left-0 w-full h-full border-none'
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-24 my-24'>
            <div className='flex flex-col w-full lg:w-1/2 justify-center'>
              <h1 className='font-bold text-primary'>
                Building For The Future Campaign
              </h1>
              <hr className='my-3 border border-accent w-1/2' />
              <p className='text-text tracking-wide text-lg'>
                We are excited about the opportunity to add six more classrooms
                to continue teaching God's children about what is good, true,
                and beautiful. Currently, we are in the process of setting up
                cottage meetings with small groups to discuss the needs of the
                campaign. Please contact the office if you have any questions
                about these meetings. We are also looking for donors.
              </p>
            </div>
            <div className='flex flex-col justify-center w-full lg:w-1/2'>
              <div className='flex flex-col bg-primary rounded shadow-lg p-12'>
                <h3 className='text-white font-bold text-center mb-6'>
                  Contribute to the{' '}
                  <span className='italic'>
                    Building For The Future Campaign
                  </span>
                </h3>
                <h5 className='my-3 text-gray-200'>
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
          <div className='flex justify-center'>
            <Link
              to='/'
              className='lg:absolute flex bottom-1 z-30 text-white hover:text-gray-300'
            >
              <span className='mr-2'>Return to ccamankato.org</span>
              <FontAwesomeIcon className='self-center' icon={faAngleRight} />
            </Link>
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
  }
`;

export default Build;
