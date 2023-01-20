import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import NavItem from "./navItem";
import { StaticImage } from "gatsby-plugin-image";
import { NavItemType } from "../types/common";
import Button from "./button/button";
import {
  faAngleRight,
  faRightToBracket,
  faLocationDot,
  faPhone,
  faEnvelope,
  faBars,
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
      nav: allSanityNavItem(sort: { fields: order }) {
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
    }
  `);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-primary">
        {/* mobile nav */}
        <div className="flex justify-end py-6 mx-6 lg:hidden">
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-2xl relative"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute w-full bg-white left-0 z-30 mt-6 p-6 text-lg border border-gray-200 shadow-lg">
                {data.nav.nodes.map((node: NavItemType) => (
                  <div key={node.label} className="flex flex-col">
                    <Link
                      key={node.label}
                      to={node.link}
                      className="hover:text-primary hover:underline mb-1"
                    >
                      {node.label}
                    </Link>
                    {node.subLinks &&
                      node.subLinks.map((subLink: any) => (
                        <Link
                          key={subLink.label}
                          to={subLink.link}
                          className="ml-4 hover:text-primary hover:underline mb-1"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                  </div>
                ))}
                <div className="flex justify-center gap-12 mt-6">
                  <Button
                    label="Parent Portal"
                    theme="primary"
                    startIcon={faRightToBracket}
                    size="small"
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
            )}
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
      <ul className="lg:block hidden w-full mt-3">
        <div className="max-w-screen-xl flex mx-auto">
          <li>
            <Link to="/">
              <StaticImage
                src="../assets/images/logo_no_background.png"
                alt="CCA Logo"
                placeholder="blurred"
                layout="fixed"
                height={150}
                className="mr-32"
              />
            </Link>
          </li>
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
      </ul>
    </div>
  );
};

export default header;
