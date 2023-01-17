import React from "react";
import ShortPromo from "../assets/videos/promo_short.mp4";
import Thumbnail from "../assets/images/promo_thumbnail2.png";
import Button from "./button/button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ClassicalEducation = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full gap-12">
        <div className="flex w-1/2">
          <video
            controls
            width="100%"
            autoPlay={false}
            poster={Thumbnail}
            className="self-center rounded shadow-lg"
          >
            <source src={ShortPromo} type="video/mp4" />
          </video>
        </div>
        <div className="flex w-1/2 h-full flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary">
            What Is Classical Lutheran Education?
          </h2>
          <p className="my-4 text-base leading-relaxed text-text">
            Classical Lutheran education can be deﬁned as the classical liberal
            arts with Lutheran catechesis. Dr. Gene Edward Veith has suggested
            that “The liberal arts can equip a child for effective service in
            the world; catechesis can equip a child for everlasting life.”
            (Korcok, 2011, p. xii) The liberal arts cultivate the student&apos;s
            mind and character with academic rigor, tools for learning, and
            formative content. Lutheran catechesis instructs and nurtures
            matters of the soul through the Holy Scriptures, the Lutheran
            confessions, and the liturgy and hymnody of the Church. With the
            Seven Liberal Arts, the three sciences: moral, natural and
            theological, and the Small Catechism&apos;s Six Chief Parts,
            classical Lutheran education prepares servant leaders for church and
            world.
          </p>
          <small className="italic text-gray-500 mb-12">
            - Cheryl Swope, M.Ed - Author of Simply Classical: A Beautiful Education for Any Child
          </small>
          <Button label="Learn More" theme="primary" endIcon={faAngleRight} link="/academics/what-is-classical-education" classes={['self-start']} />
        </div>
      </div>
    </div>
  );
};

export default ClassicalEducation;