import React from "react";
import ShortPromo from "../assets/videos/promo_short.mp4";
import Thumbnail from "../assets/images/promo_thumbnail2.png";

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
            - Cheryl Swope, M.Ed
          </small>
          <h2 className="text-3xl font-bold leading-tight text-primary">
            What Are the Seven Liberal Arts?
          </h2>
          <p className="my-4 text-base leading-relaxed text-text">
            The Seven Liberal Arts include the three arts of language (trivium)
            and the four arts of mathematics (quadrivium). “Liberal” derives
            from the Latin word for “free,” as these “arts of freedom” were
            designed so free people could think about great ideas for the noble
            service of others. In contrast, the “servile” arts, an education for
            slaves, prepare for menial labor. The liberal arts enable an
            individual to live, to study, to think, and to serve others in any
            vocation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassicalEducation;
