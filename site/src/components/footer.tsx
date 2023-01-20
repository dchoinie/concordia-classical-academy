import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button/button";

interface FooterItem {
  label: string;
  link: string;
  subLinks?: FooterItem[];
}

const legalCol = [
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    label: "Jobs",
    link: "/jobs",
  },
  {
    label: "Donations",
    link: "/support",
  },
];

const footerCol = (title: string, items: FooterItem[]) => (
  <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
    <p className="text-gray-200">{title}</p>
    {items.map((item: FooterItem) => (
      <Link key={item.label} to={item.link} className="text-gray-400">
        {item.label}
      </Link>
    ))}
  </div>
);

const brandCol = (
  <div className="flex items-center lg:items-start flex-col mb-6 lg:mb-0">
    <StaticImage
      src="../assets/images/luther-rose.png"
      alt="Luther Rose"
      height={50}
      placeholder="blurred"
      className="lg:self-start self-center mb-2"
    />
    <h6 className="text-gray-200 mb-2">Concordia Classical Academy</h6>
    <div className="flex text-gray-200 text-lg">
      <a
        href="https://www.facebook.com/CCAMankato"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="mailto:info@ccamankato.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </div>
);

const footer = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      navItems: allSanityNavItem(sort: { order: ASC, fields: order }) {
        edges {
          node {
            label
            link
            subLinks {
              label
              link
            }
          }
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

  const topNavItems = data.navItems.edges.map((navItem: any) => navItem.node);
  const subNavItems = topNavItems
    .filter((topNavItem: any) => topNavItem.subLinks.length > 0)
    .map((topNavItem: any) =>
      topNavItem.subLinks.flatMap((subItem: any) => subItem)
    );
  const subs = subNavItems.flatMap((subItem: any) => subItem);
  const allNavItemsToDisplay = topNavItems
    .filter((topNavItem: any) => topNavItem.subLinks.length < 1)
    .concat(subs).sort(sort);

  return (
    <div className="w-full bg-primary">
      <div className="max-w-screen-xl mx-6 lg:mx-auto pt-12 pb-6">
        <div className="flex flex-col lg:flex-row w-full justify-between mb-6">
          {brandCol}
          <div className="mb-6 lg:mb-0">
            <p className="text-gray-200 text-center mb-2">Navigation</p>
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
            <p className="text-gray-200">Parents / Teachers</p>
            <a
              href=""
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
              href=""
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
            <h6 className="text-gray-200">Subscribe To Our Newsletter</h6>
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
