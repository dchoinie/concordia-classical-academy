import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      allSanityNavItem(sort: { fields: order }) {
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

  return (
    <div className="w-full">
      <div className="bg-primary">
        <div className="flex justify-between max-w-screen-xl mx-auto py-4">
          <div className="flex self-center text-white text-xs">
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
      <ul className="w-full mt-3">
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
            {data.allSanityNavItem.nodes.map((navItem: NavItemType) => (
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
