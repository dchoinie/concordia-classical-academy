import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage } from 'gatsby-plugin-image';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Button from './button/button';

interface SubNavItem {
  label: string;
  link: string;
}

interface TopNavItem {
  label: string;
  link: string;
  subLinks?: SubNavItem[];
}

const legalCol = [
  {
    label: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    label: 'Terms & Conditions',
    link: '/terms-and-conditions',
  },
  {
    label: 'Donations',
    link: '/support/donations',
  },
];

const footerCol = (title: string, items: SubNavItem[]) => (
  <div className='flex flex-col items-center lg:items-start mb-6 lg:mb-0'>
    <p className='text-gray-200 fontHeader underline'>{title}</p>
    {items.map((item: SubNavItem) => (
      <Link
        key={item.label}
        to={item.link}
        className='text-gray-400 mb-1 lg:mb-0'
      >
        {item.label}
      </Link>
    ))}
  </div>
);

const footer = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      navItems: allSanityNavItem(sort: { order: ASC }) {
        nodes {
          label
          link
          subLinks {
            label
            link
          }
        }
      }
      lutherRose: file(relativePath: { eq: "luther-rose.png" }) {
        childImageSharp {
          gatsbyImageData(width: 75)
        }
      }
      site {
        siteMetadata {
          address
          email
          phone
          title
        }
      }
    }
  `);

  const sort = (a: any, b: any) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  };

  const topNavItems = data.navItems.nodes.map((navItem: TopNavItem) => navItem);
  const subNavItems = topNavItems
    .filter(
      (topNavItem: TopNavItem) =>
        topNavItem.subLinks && topNavItem.subLinks.length > 0
    )
    .map(
      (topNavItem: TopNavItem) =>
        topNavItem.subLinks &&
        topNavItem.subLinks.flatMap((subItem: SubNavItem) => subItem)
    );
  const subs = subNavItems.flatMap((subItem: SubNavItem) => subItem);
  const allNavItemsToDisplay = topNavItems
    .filter(
      (topNavItem: TopNavItem) =>
        topNavItem.subLinks && topNavItem.subLinks.length < 1
    )
    .concat(subs)
    .sort(sort);

  return (
    <div className='w-full bg-primary'>
      <div className='max-w-screen-xl mx-6 lg:mx-auto pt-12 pb-6'>
        <div className='flex flex-col lg:flex-row w-full justify-between mb-6'>
          <div className='flex items-center lg:items-start flex-col mb-6 lg:mb-0'>
            <Link to='/'>
              <GatsbyImage
                image={data.lutherRose.childImageSharp.gatsbyImageData}
                alt='Luther Rose'
                className='lg:self-start self-center mb-2'
              />
            </Link>
            <h4 className='text-accent mb-2 fontHeader'>
              {data.site.siteMetadata.title}
            </h4>
            <p className="text-gray-300 mb-1">{data.site.siteMetadata.address}</p>
            <a href={`tel:+1${data.site.siteMetadata.phone}`} className="text-gray-300 mb-1">{data.site.siteMetadata.phone}</a>
            <a href={`mailto:${data.site.siteMetadata.email}`} className="text-gray-300 mb-1">{data.site.siteMetadata.email}</a>
            <div className='flex text-gray-200 text-lg'>
              <a
                href='https://www.facebook.com/CCAMankato'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='CCA Facebook'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <div className='mb-6 lg:mb-0'>
            <p className='text-gray-200 text-center mb-2 fontHeader underline'>
              Navigation
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1 place-items-center'>
              {allNavItemsToDisplay.map((item: any) => (
                <Link
                  key={item.label}
                  to={item.link}
                  className='text-gray-400 mb-2 lg:mb-0'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {footerCol('Legal', legalCol)}
          <div className='flex flex-col items-center lg:items-start'>
            <p className='text-gray-200 fontHeader underline'>Parents / Teachers</p>
            <a
              href='https://logins2.renweb.com/logins/ParentsWeb-Login.aspx'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 flex mb-2 lg:mb-0'
            >
              <span className='mr-2'>Parent Portal</span>
              <FontAwesomeIcon
                icon={faRightToBracket}
                className='self-center'
              />
            </a>
            <a
              href='https://accounts.renweb.com/Account/Login'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 flex mb-2 lg:mb-0'
            >
              <span className='mr-2'>Teacher Login</span>
              <FontAwesomeIcon
                icon={faRightToBracket}
                className='self-center'
              />
            </a>
            <a
              href='https://concordiaclassicalacademy.sanity.studio/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 flex'
            >
              <span className='mr-2'>Website Login</span>
              <FontAwesomeIcon
                icon={faRightToBracket}
                className='self-center'
              />
            </a>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full justify-between py-6 border-y border-gray-400 mb-6'>
          <div className='flex flex-col items-center lg:items-start mb-6 lg:mb-0'>
            <p className='text-gray-200 fontHeader'>
              Subscribe To Our Newsletter
            </p>
            <p className='text-gray-400 text-center lg:text-left'>
              Get the latest news, updates and school info sent to your inbox.
            </p>
          </div>
          <form
            action='https://formspree.io/f/mjvdkqbp'
            method='POST'
            className='flex justify-center lg:justify-start items-center'
          >
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              className='px-4 rounded shadow mr-4'
              style={{ height: '40px' }}
            />
            <button type='submit' className='btn btnAccent self-center'>
              Subscribe
            </button>
          </form>
        </div>
        <div className='flex self-center justify-center'>
          <p className='text-gray-400'>
            <>&copy; {new Date().getFullYear()} {data.site.siteMetadata.title}</>
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
