import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Script, useStaticQuery } from "gatsby";
import React from "react";
import ContactForm from "./contactForm";

const ContactComponent = () => {
  const data = useStaticQuery(graphql`{
  site {
    siteMetadata {
      address
      phone
      email
    }
  }
  allSanityNavItem(sort: {order: ASC}) {
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
}`);
  return (
    <div className="my-24">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="text-primary font-bold mb-6">Contact Us</h2>
          <p className="mb-6">
            We would love to hear from you! Let us know if you have any
            questions or if we can help in any way.
          </p>
          <div className="flex mb-6">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-4 self-center text-primary"
            />
            <p>{data.site.siteMetadata.address}</p>
          </div>
          <div className="flex mb-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-4 self-center text-primary"
            />
            <p>{data.site.siteMetadata.phone}</p>
          </div>
          <div className="flex mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-4 self-center text-primary"
            />
            <p>{data.site.siteMetadata.email}</p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
