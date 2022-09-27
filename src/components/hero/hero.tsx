import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cx from "classnames";
import { faAngleRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import * as styles from "./hero.module.scss";

const hero = () => {
  return (
    <div className={cx(styles.container)}>
      <div className="flex h-full">
        <div className="flex w-1/2 mr-12 flex-col justify-center">
          <h1 className="text-primary mb-4 font-bold">
            Concordia{" "}
            <span className="text-accent underline tracking-wider">
              Classical
            </span>
            <br />
            Academy
          </h1>
          <p className="mb-4 text-text">
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
            <Button label="About CCA" theme="accent" endIcon={faCircleInfo} />
          </div>
        </div>
        <div className="flex w-1/2 self-center">
          <StaticImage
            src="../../assets/images/church_exterior.jpg"
            alt="exterior"
            placeholder="blurred"
            className="rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;

<StaticImage
  src="../assets/images/logo_no_background.png"
  alt="CCA Logo"
  placeholder="blurred"
  layout="fixed"
  height={150}
  className="mr-32"
/>;
