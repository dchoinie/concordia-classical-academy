import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MissionComponent = () => {
  return (
    <div className="flex gap-12 my-24">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-primary mb-3">Mission:</h2>
          <h5 className="text-text italic">
            Concorida Classical Academy uses God's Word in a Christ-centered
            education to assist families in training students for Christian
            lives on earth and for eternity.
          </h5>
          <div className="border border-gray-200 w-2/3 my-12"></div>
          <p className="mb-6">
            <span className="text-accent text-xl underline">Concorida</span>{" "}
            means "harmony" in Latin. We are a Lutheran school that
            intentionally reaches out to brothers and sisters in Christ from
            many different churches. We are privileged to be a witness for
            Christ to all children and families.
          </p>
          <p className="mb-6">
            We are{" "}
            <span className="text-accent text-xl underline">Classical!</span>{" "}
            Using the best time tested teaching techniques, we strive to devlop
            well rounded students who are ready to serve God and the world.
            These techniques are based on the "Trivium," which consists of three
            parts: Grammar, Logic and Rhetoric.
          </p>
          <p className="mb-12">
            The word{" "}
            <span className="text-accent text-xl underline">Academy</span>{" "}
            reflects our high academic expectations. We want our students to
            thrive and be prepared for life in this world and the next, by
            developing all of their God-given talents.
          </p>
          <p>
            <span className="text-accent text-xl underline">
              Concordia Classical Academy
            </span>{" "}
            reflects who we are, what we do, and why we do it. In the end it is
            only to the name of Jesus Christ that every knee shall bow!
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
        <StaticImage
          src="../assets/images/kids_1.jpg"
          alt="Mission"
          placeholder="blurred"
          height={400}
          className="rounded shadow-lg self-center"
        />
      </div>
    </div>
  );
};

export default MissionComponent;
