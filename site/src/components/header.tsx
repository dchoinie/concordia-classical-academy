import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import cx from "classnames";
import NavItem from "./navItem";
import { GatsbyImage } from "gatsby-plugin-image";
import { NavItemType } from "../types/common";
import Button from "./button/button";
import {
  faAngleRight,
  faRightToBracket,
  faLocationDot,
  faPhone,
  faEnvelope,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OutsideClickHandler from "react-outside-click-handler";

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
          subLinks {
            _key
            label
            link
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
    <div className="w-full">
      <div className="bg-primary">
        {/* mobile nav */}
        <div className={cx("py-6 mx-6 lg:hidden")}>
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div className="flex w-full justify-between">
              <div className="flex text-white">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="self-center mr-2"
                />
                <span>{data.site.siteMetadata.email}</span>
              </div>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faX}
                  className="text-white text-2xl relative hover:cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white text-2xl relative hover:cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
            <div
              className={cx(
                "transform ease-in-out transition-all duration-300 w-3/4 bg-white right-0 z-30 mt-6 p-6 absolute text-lg border border-gray-200 shadow-lg",
                isOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="flex flex-col items-center">
                <Link to="/">
                  <GatsbyImage
                    image={data.logo.childImageSharp.gatsbyImageData}
                    alt="CCA Logo"
                    className="lg:mr-32 mb-6 w-32"
                  />
                </Link>
                <div className="text-center">
                  {data.nav.nodes.map((node: NavItemType) => (
                    <div
                      key={node.label}
                      className="flex flex-col mb-4 fontHeader"
                    >
                      <Link
                        key={node.label}
                        to={node.link}
                        className="hover:text-primary hover:underline mb-1 underline"
                      >
                        {node.label}
                      </Link>
                      {node.subLinks &&
                        node.subLinks.map((subLink: any) => (
                          <Link
                            key={subLink.label}
                            to={subLink.link}
                            className="text-gray-700 hover:text-primary hover:underline mb-1"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center my-6">
                <Button
                  label="Parent Portal"
                  theme="primary"
                  startIcon={faRightToBracket}
                  size="small"
                  classes={["mb-6"]}
                  href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
                />
                <Button
                  label="Apply Now"
                  theme="accent"
                  endIcon={faAngleRight}
                  size="small"
                  link="/admissions/admission-process"
                />
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        {/* desktop nav */}
        <div className="hidden lg:flex justify-between max-w-screen-xl mx-auto py-4">
          <div className="lg:flex self-center text-white text-xs">
            <div className="flex">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="self-center mr-2"
              />
              <span>{data.site.siteMetadata.address}</span>
            </div>
            <span className="mx-2">|</span>
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} className="self-center mr-2" />
              <span>{data.site.siteMetadata.phone}</span>
            </div>
            <span className="mx-2">|</span>
            <div className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="self-center mr-2" />
              <span>{data.site.siteMetadata.email}</span>
            </div>
          </div>
          <div className="flex">
            <Button
              label="Parent Portal"
              theme="white"
              startIcon={faRightToBracket}
              classes={["mr-2"]}
              size="small"
              href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
            />
            <Button
              label="Apply Now"
              theme="accent"
              endIcon={faAngleRight}
              size="small"
              link="/admissions/admission-process"
            />
          </div>
        </div>
      </div>
      <div className="lg:block hidden w-full mt-3">
        <div className="max-w-screen-xl flex mx-auto">
          <Link to="/">
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              alt="CCA Logo"
              className="mr-32"
            />
          </Link>
          <div className="flex w-full justify-between self-center">
            {data.nav.nodes.map((navItem: NavItemType) => (
              <NavItem
                key={navItem.id}
                id={navItem.id}
                label={navItem.label}
                link={navItem.link}
                subLinks={navItem.subLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
