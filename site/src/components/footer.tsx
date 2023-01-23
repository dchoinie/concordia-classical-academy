import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GatsbyImage,
  GatsbyImageProps,
  StaticImage,
} from "gatsby-plugin-image";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button/button";

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
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    label: "Careers",
    link: "/careers",
  },
  {
    label: "Donations",
    link: "/support/donations",
  },
];

const footerCol = (title: string, items: SubNavItem[]) => (
  <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
    <p className="text-gray-200 fontHeader">{title}</p>
    {items.map((item: SubNavItem) => (
      <Link key={item.label} to={item.link} className="text-gray-400">
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
    <div className="w-full bg-primary">
      <div className="max-w-screen-xl mx-6 lg:mx-auto pt-12 pb-6">
        <div className="flex flex-col lg:flex-row w-full justify-between mb-6">
          <div className="flex items-center lg:items-start flex-col mb-6 lg:mb-0">
            <GatsbyImage
              image={data.lutherRose.childImageSharp.gatsbyImageData}
              alt="Luther Rose"
              className="lg:self-start self-center mb-2"
            />
            <p className="text-gray-200 mb-2 fontHeader">
              Concordia Classical Academy
            </p>
            <div className="flex text-gray-200 text-lg">
              <a
                href="https://www.facebook.com/CCAMankato"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
                aria-label="CCA Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="mailto:ccamankato@gmail.com" aria-label="Contact CCA">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <p className="text-gray-200 text-center mb-2 fontHeader">
              Navigation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1 place-items-center">
              {allNavItemsToDisplay.map((item: any) => (
                <Link key={item.label} to={item.link} className="text-gray-400">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {footerCol("Legal", legalCol)}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-gray-200 fontHeader">Parents / Teachers</p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex"
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="self-center"
              />
              <span className="ml-2">Parent Portal</span>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex"
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="self-center"
              />
              <span className="ml-2">Teacher Login</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between py-6 border-y border-gray-400 mb-6">
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <p className="text-gray-200 fontHeader">
              Subscribe To Our Newsletter
            </p>
            <p className="text-gray-400">
              Get the latest news, updates and school info sent to your inbox.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 rounded shadow mr-4"
              style={{ height: "40px" }}
            />
            <Button
              label="Subscribe"
              theme="accent"
              classes={["self-center"]}
            />
          </div>
        </div>
        <div className="flex self-center justify-center">
          <p className="text-gray-400">
            <>&copy; {new Date().getFullYear()} Concorida Classical Academy</>
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
