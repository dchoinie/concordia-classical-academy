import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import cx from "classnames";
import { faAngleRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import * as styles from "./hero.module.scss";
import { graphql, useStaticQuery } from "gatsby";

const hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      exterior: file(relativePath: { eq: "church_exterior.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  `);
  return (
    <div className={cx(styles.container)}>
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:h-full my-24 lg:my-0 mx-6 lg:mx-0">
        <div className="flex w-full lg:w-1/2 flex-col justify-center items-center lg:items-start mb-12 lg:mb-0">
          <h1 className="text-primary mb-4 font-bold text-center lg:text-start">
            Concordia{" "}
            <span className="text-accent underline tracking-wider">
              Classical
            </span>
            <br />
            Academy
          </h1>
          <p className="mb-4 text-text text-center lg:text-left">
            Concorida Classical Academy uses God's Word in a Christ-centered
            education to assist families in training students for Christian
            lives on earth and for eternity.
          </p>
          <div className="flex">
            <Button
              label="Apply Now"
              theme="primary"
              endIcon={faAngleRight}
              classes={["mr-4"]}
              link="/admissions/admission-process"
            />
            <Button
              label="About CCA"
              theme="accent"
              startIcon={faCircleInfo}
              link="/about/mission"
            />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 self-center">
          <GatsbyImage
            image={data.exterior.childImageSharp.gatsbyImageData}
            alt="CCA Building"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
