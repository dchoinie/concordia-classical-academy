import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import AdoptCard from './adoptCard';
import { formatPrice, getBuyButtonUrl } from '../helpers/stripeHelpers';
import Constants from '../constants/constants';

interface Product {
  id: string;
  name: string;
}

interface AdoptProduct {
  active: string;
  currency: string;
  id: string;
  product: Product;
  unit_amount: number;
}

const buyButtons = [
  {
    name: 'Adopt-A-Student Level 1',
    url: Constants.ADOPT1,
  },
  {
    name: 'Adopt-A-Student Level 2',
    url: Constants.ADOPT2,
  },
  {
    name: 'Adopt-A-Student Level 3',
    url: Constants.ADOPT3,
  },
  {
    name: 'Adopt-A-Student Level 4',
    url: Constants.ADOPT4,
  },
  {
    name: 'Adopt-A-Student Level 5',
    url: Constants.ADOPT5,
  },
  {
    name: 'Adopt-A-Student Level 6',
    url: Constants.ADOPT6,
  },
];

const AdpotAStudentComponent = () => {
  const data = useStaticQuery(graphql`
    query AdpotQuery {
      allStripePrice(
        sort: { product: { name: ASC } }
        filter: { product: { name: { glob: "Adopt-A-Student Level *" } } }
      ) {
        nodes {
          active
          id
          unit_amount
          product {
            name
            id
          }
          currency
        }
      }
      adoptImage: file(relativePath: { eq: "adopt.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `);

  return (
    <div className='my-24'>
      <div className='flex flex-col lg:flex-row gap-12 mb-24'>
        <div className='flex w-full lg:w-1/2 self-start'>
          <GatsbyImage
            image={data.adoptImage.childImageSharp.gatsbyImageData}
            alt='Donate Image'
            className='rounded shadow-lg'
          />
        </div>
        <div className='flex flex-col w-full lg:w-1/2'>
          <p className='mb-6'>
            The work of God has given us to do here at Good Shepherd and
            Concordia Classical Academy finds its' foundation and focus on the
            gift of the Word of God. The very Word that was incarnate by the
            Holy Spirit, born of the Vigin Mary, was crucified, died, buried,
            and on the third day rose again to life is what we are blessed to
            share with our students each day. This Word of Jesus endures
            forever.
          </p>
          <p className='mb-6'>
            Concordia Classical Academy has been greatly blessed by our Lord
            Jesus. Through the COVID-19 pandemic, God has led many new families
            to our ministry. So much so that now we are experiencing some
            growing pains.
          </p>
          <p className='mb-6'>
            You are invited to join us in this work our Lord has given us to do
            through our Adopt-A-Student program. Your help is needed to empower
            this ministry of God's word.
          </p>
          <div>
            <p className='mb-6'>
              When you adopt a student, you will be introduced to one of our CCA
              students, who they are, and who their family is. You will be asked
              to:
            </p>
            <ul className='list-disc text-text italic'>
              <li className='ml-12'>
                First and foremost, pray for your adopted student.
              </li>
              <li className='ml-12'>
                Write notes of encouragement to your adopted student.
              </li>
              <li className='ml-12'>
                Help with your adopted student's education cost.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='max-w-3xl mx-auto text-text text-center my-12'>
        <h5>
          The cost of education at Concordia Classical Academy is $6500. While
          most families pay tuition, this only covers a portion of the total
          cost. CCA subsidizes each child's education through the generous gifts
          of Christian men &amp; women who see the value of a classical
          Chrisitan education.
        </h5>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-6'>
        {data.allStripePrice.nodes.map((adoptProduct: AdoptProduct) => {
          return (
            <AdoptCard
              key={adoptProduct.product.id}
              name={adoptProduct.product.name}
              price={formatPrice(adoptProduct.unit_amount)}
              url={getBuyButtonUrl(adoptProduct.product.name, buyButtons)}
            />
          );
        })}
      </div>
      <p className='max-w-xl mx-auto text-center italic'>
        Donations may also be made by cash/check. Please drop off any
        adopt-a-student donations to the main office at Concordia Classical
        Academy
      </p>
    </div>
  );
};

export default AdpotAStudentComponent;
