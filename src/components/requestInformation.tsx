import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const RequestInformationComponent = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <div className="my-24">
      <div className="flex gap-12">
        <div className="flex flex-col w-1/2">
          <h2 className="text-primary font-bold mb-6">
            Want more information?
          </h2>
          <p className="mb-6">
            If you have any additional questions about tuition, classes,
            admissions, finanical assistance or anything else, please contact us
            and we will be happy to help!
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
        <div className="flex w-1/2">
          <form
            action=""
            method="post"
            className="w-full flex flex-col p-6 rounded shadow border border-gray-100"
          >
            <div className="flex justify-between gap-6 mb-6">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First"
                className="p-4 w-full border border-gray-200 rounded shadow"
              />
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last"
                className="p-4 w-full border border-gray-200 rounded shadow"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-4 w-full border border-gray-200 rounded shadow mb-6"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="p-4 w-full border border-gray-200 rounded shadow mb-6"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="p-4 w-full border border-gray-200 rounded shadow mb-6"
            ></textarea>
            <button
              type="submit"
              className="btnPrimary btnMedium btn self-start"
            >
              Submit
              <span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="ml-2 self-center"
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestInformationComponent;
