import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../../components/button/button';
import DonateCard from '../../components/donateCard';
import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import { SEO } from '../../components/seo';
import { getBuyButtonUrl } from '../../helpers/stripeHelpers';
import Constants from '../../constants/constants';

interface DonationProduct {
  id: string;
  name: string;
}
interface Donation {
  active: string;
  currency: string;
  product: DonationProduct;
  unit_amount: number;
}

const donations = [
  {
    name: 'Donation - 10',
    url: Constants.DONATE10,
  },
  {
    name: 'Donation - 20',
    url: Constants.DONATE20,
  },
  {
    name: 'Donation - 50',
    url: Constants.DONATE50,
  },
  {
    name: 'Donation - 100',
    url: Constants.DONATE100,
  },
  {
    name: 'Donation - 250',
    url: Constants.DONATE250,
  },
  {
    name: 'Donation - 500',
    url: Constants.DONATE500,
  },
  {
    name: 'General Donation',
    url: Constants.DONATE_GENERAL,
  },
];

const Donate = ({ data }: any): JSX.Element => {
  return (
    <>
      <SEO title='Donate' />
      <Layout>
        <div className='max-w-screen-xl mx-6 lg:mx-auto'>
          <PageTitle title='Donate' />
          <div className='my-24 flex flex-col lg:flex-row gap-12'>
            <div className='flex w-full lg:w-1/2'>
              <GatsbyImage
                image={data.donateImage.childImageSharp.gatsbyImageData}
                alt='Luther Rose Stained Glass'
                className='rounded shadow-lg'
              />
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='mb-12'>
                <h4 className='text-gray-700 text-2xl mb-6'>
                  Make A Donation To Concordia Classical Academy
                </h4>
                <p className='text-gray-600'>
                  Members and other friends of Concordia Classical Academy may
                  make donations to the school at any time. Donations can be
                  made online, by check or cash. You may submit check or cash
                  donations to the school office or by mail.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mb-12'>
                {data.donationAmounts.nodes.map((item: Donation) => (
                  <DonateCard
                    key={item.product.id}
                    name={item.product.name}
                    price={item.unit_amount}
                    url={getBuyButtonUrl(item.product.name, donations) || '/'}
                  />
                ))}
              </div>
              <div>
                <h5 className='mb-3'>
                  To donate a custom amount, click below and enter in the amount
                </h5>
                <Button
                  label='Donate Custom Amount'
                  href={getBuyButtonUrl(
                    data.generalDonation.product.name,
                    donations
                  )}
                  endIcon={faAngleRight}
                  theme='white'
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    donationAmounts: allStripePrice(
      filter: {
        product: { name: { regex: "/Donation/i", ne: "General Donation" } }
      }
      sort: { unit_amount: ASC }
    ) {
      nodes {
        active
        currency
        unit_amount
        product {
          name
          id
        }
      }
    }
    generalDonation: stripePrice(
      product: { name: { eq: "General Donation" } }
    ) {
      active
      id
      unit_amount
      currency
      product {
        name
        id
      }
    }
    donateImage: file(relativePath: { eq: "luther_rose_glass.JPG" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
  }
`;

export default Donate;
