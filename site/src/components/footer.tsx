import React from "react";
import { Link } from "gatsby";
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
}

const admissionCol = [
  {
    label: "Request Information",
    link: "/request-information",
  },
  {
    label: "Admission Process",
    link: "/admissions/admission-process",
  },
  {
    label: "Tuition / Financial Assistance",
    link: "/tuition-financial-assistance",
  },
];

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
  <div className="flex flex-col">
    <p className="text-gray-200">{title}</p>
    {items.map((item: FooterItem) => (
      <Link key={item.label} to={item.link} className="text-gray-400">
        {item.label}
      </Link>
    ))}
  </div>
);

const brandCol = (
  <div className="flex flex-col">
    <StaticImage
      src="../assets/images/luther-rose.png"
      alt="Luther Rose"
      height={50}
      placeholder="blurred"
      className="self-start mb-2"
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

const footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-screen-xl mx-auto pt-12 pb-6">
        <div className="flex w-full justify-between mb-6">
          {brandCol}
          {footerCol("Admissions", admissionCol)}
          {footerCol("Legal", legalCol)}
          <div className="flex flex-col">
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
        <div className="flex w-full justify-between py-6 border-y border-gray-400 mb-6">
          <div className="flex flex-col">
            <h6 className="text-gray-200">Subscribe To Our Newsletter</h6>
            <p className="text-gray-400">
              Get the latest news, updates and school info sent to your inbox.
            </p>
          </div>
          <div className="flex items-center">
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
