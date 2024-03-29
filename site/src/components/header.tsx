import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import cx from 'classnames';
import NavItem from './navItem';
import { GatsbyImage } from 'gatsby-plugin-image';
import { NavItemType } from '../types/common';
import Button from './button/button';
import {
  faAngleRight,
  faRightToBracket,
  faLocationDot,
  faPhone,
  faEnvelope,
  faBars,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from 'react-outside-click-handler';
import Constants from '../constants/constants';
import SpecialAlert from './specialAlert';

const header = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          address
          phone
          email
        }
      }
      nav: allSanityNavItem(sort: { order: ASC }) {
        nodes {
          id
          label
          link
          order
          external
          subLinks {
            _key
            label
            link
            external
          }
        }
      }
      logo: file(relativePath: { eq: "logo_no_background.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150)
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
      <SpecialAlert />
      <div className='bg-primary'>
        {/* mobile nav */}
        <div className={cx('py-6 mx-6 lg:hidden')}>
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div className='flex w-full justify-between'>
              <div className='flex text-white'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='self-center mr-2'
                />
                <span>{data.site.siteMetadata.email}</span>
              </div>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faX}
                  className='text-white text-2xl relative hover:cursor-pointer'
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className='text-white text-2xl relative hover:cursor-pointer'
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
            <div
              className={cx(
                'transform ease-in-out transition-all duration-300 w-3/4 bg-white right-0 z-30 mt-6 p-6 absolute text-lg border border-gray-200 shadow-lg',
                isOpen ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <div className='flex flex-col items-center'>
                <Link to='/'>
                  <GatsbyImage
                    image={data.logo.childImageSharp.gatsbyImageData}
                    alt='CCA Logo'
                    className='lg:mr-32 mb-6 w-32'
                  />
                </Link>
                <div className='text-center'>
                  {data.nav.nodes.map((node: NavItemType) => {
                    if (node.external) {
                      return (
                        <div
                          key={node.label}
                          className='flex flex-col mb-4 fontHeader'
                        >
                          <a
                            key={node.label}
                            href={node.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-primary hover:underline mb-1 underline'
                          >
                            {node.label}
                          </a>
                          {node.subLinks &&
                            node.subLinks.map((subLink: any) => {
                              if (subLink.external) {
                                return (
                                  <a
                                    key={subLink.label}
                                    href={subLink.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-700 hover:text-primary hover:underline mb-1'
                                  >
                                    {subLink.label}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={subLink.label}
                                  to={subLink.link}
                                  className='text-gray-700 hover:text-primary hover:underline mb-1'
                                >
                                  {subLink.label}
                                </Link>
                              );
                            })}
                        </div>
                      );
                    }
                    return (
                      <div
                        key={node.label}
                        className='flex flex-col mb-4 fontHeader'
                      >
                        {node.external ? (
                          <a
                            key={node.label}
                            href={node.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-primary hover:underline mb-1 underline'
                          >
                            {node.label}
                          </a>
                        ) : (
                          <Link
                            key={node.label}
                            to={node.link}
                            className='hover:text-primary hover:underline mb-1 underline'
                          >
                            {node.label}
                          </Link>
                        )}
                        {node.subLinks &&
                          node.subLinks.map((subLink: any) => {
                            if (subLink.external) {
                              return (
                                <a
                                  key={subLink.label}
                                  href={subLink.link}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-gray-700 hover:text-primary hover:underline mb-1'
                                >
                                  {subLink.label}
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={subLink.label}
                                to={subLink.link}
                                className='text-gray-700 hover:text-primary hover:underline mb-1'
                              >
                                {subLink.label}
                              </Link>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='flex flex-col items-center my-6'>
                <Button
                  label='Parent Portal'
                  theme='primary'
                  startIcon={faRightToBracket}
                  size='small'
                  classes={['mb-6']}
                  href={Constants.LOGIN}
                />
                <Button
                  label='Apply Now'
                  theme='accent'
                  endIcon={faAngleRight}
                  size='small'
                  href={Constants.ADMISSIONS}
                />
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        {/* desktop nav */}
        <div className='hidden lg:flex justify-between max-w-screen-xl mx-auto py-4'>
          <div className='lg:flex self-center text-white text-xs'>
            <div className='flex'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='self-center mr-2'
              />
              <a
                href='https://goo.gl/maps/mWuXNaUkcPFkEWH97'
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.site.siteMetadata.address}
              </a>
            </div>
            <span className='mx-2'>|</span>
            <div className='flex'>
              <FontAwesomeIcon icon={faPhone} className='self-center mr-2' />
              <a href={`tel:${data.site.siteMetadata.phone}`}>
                {data.site.siteMetadata.phone}
              </a>
            </div>
            <span className='mx-2'>|</span>
            <div className='flex'>
              <FontAwesomeIcon icon={faEnvelope} className='self-center mr-2' />
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </div>
          </div>
          <div className='flex'>
            <Button
              label='Parent Portal'
              theme='white'
              startIcon={faRightToBracket}
              classes={['mr-2']}
              size='small'
              href={Constants.LOGIN}
            />
            <Button
              label='Apply Now'
              theme='accent'
              endIcon={faAngleRight}
              size='small'
              href={Constants.ADMISSIONS}
            />
          </div>
        </div>
      </div>
      <div className='lg:block hidden w-full mt-3'>
        <div className='max-w-screen-xl flex mx-auto'>
          <Link to='/'>
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              alt='CCA Logo'
              className='mr-32'
            />
          </Link>
          <div className='flex w-full justify-between self-center'>
            {data.nav.nodes.map((navItem: NavItemType) => (
              <NavItem
                key={navItem.id}
                id={navItem.id}
                label={navItem.label}
                link={navItem.link}
                subLinks={navItem.subLinks}
                external={navItem.external}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
