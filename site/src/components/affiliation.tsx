import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Button from "./button/button";

const AffiliationComponent = () => {
  const data = useStaticQuery(graphql`
    query MissionImageQuery {
      church: file(relativePath: { eq: "church_exterior.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
      lcms: file(relativePath: { eq: "lcms_logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `);
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-24 my-24">
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="mb-6">
            Concordia Classical is a ministry of Good Shepherd Lutheran Church
            (LCMS) located in North Mankato, MN. The mission of Good Shepherd is{" "}
            <span className="font-bold underline text-accent">
              Grow in God&apos;s Truth. Show Jesus&apos; Love.
            </span>
          </p>
          <p className="mb-6">
            The purpose of the church in earth and heaven is to declare the
            praises of God. (1 Pet. 2:9). The church&apos;s twin priorities are
            expressed in the first two petitions of the Lord&apos;s Prayer,
            “Hallowed be thy name. Thy kingdom come.” This happens when
            God&apos;s word, in all its truth and purity, is taught and believed
            among us and shared with others throughout the world. Because of the
            unique values and opportunities God has given our church, the
            special focus of the Lutheran Church of the Good Shepherd in North
            Mankato is on Christian education for all ages and gospel outreach
            to those who need faith in Jesus.
          </p>
          <p>
            We grow in God’s truth as a group and individually through worship
            and Christian education. We believe, teach and confess the truth of
            God as revealed in the Bible, God’s fully inspired and true word.
            This truth is accurately described in the Lutheran Confessions,
            which identify salvation by grace alone, through faith alone. Our
            worship focuses on God’s word and sacraments, through which God
            comes to us and produces the responses of faith. Our liturgical
            worship uses elements and patterns we have in common with the church
            throughout the ages and throughout the world. The message of our
            worship centers on what God has done for us through Jesus. Our
            intention is to provide high quality worship which enables people of
            all ages to apply this gospel to their every day lives. According to
            Jesus’ command to “make disciples…teaching them to observe all that
            I have commanded you,” our goal is that all Christians continue to
            grow in understanding and applying the truths of God’s word, from
            childhood through old age. We will do this by offering classes,
            individual and group instruction, and reading material. Our teaching
            will be centered in the Bible, rightly dividing law and gospel, and
            will focus on what God has done for our salvation.
          </p>
          <Button
            label="Good Shepherd Lutheran Church"
            theme="primary"
            href="http://www.goodshepherdmankato.org/"
            endIcon={faAngleRight}
            classes={["mt-6 self-start"]}
          />
        </div>
        <div className="flex w-full lg:w-1/2 self-start">
          <a
            href="http://www.goodshepherdmankato.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={data.church.childImageSharp.gatsbyImageData}
              alt="Good Shepherd Lutheran Church"
              className="rounded shadow-lg"
            />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200 w-2/3 mx-auto my-12"></div>
      <div className="flex flex-col lg:flex-row gap-24 my-24">
        <div className="flex w-1/2 self-center">
          <a
            href="https://www.lcms.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={data.lcms.childImageSharp.gatsbyImageData}
              alt="Good Shepherd Lutheran Church"
            />
          </a>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="mb-6">
            Concordia Classical Academy is affiliated with the Lutheran Church
            Missouri Synod. The Lutheran Church Missouri Synod has a reputation
            of having outstanding schools since 1847. According to the National
            Assessment of Education (NAEP) "Lutheran Schools Tops in the Nation
            on the 'The Nation's Report Card'" Lutheran schools have finished
            first in five of eight categories and finished second in the other
            three.
          </p>
          <p>
            More than 1,200 early childhood centers and preschools are operated
            by congregations and Christian day schools within the LCMS. More
            than 87,000 children, ranging in age from infant/toddler to 5 years
            of age, are involved in these programs. Additionally, our
            congregations operate 880 elementary schools which serve
            approximately 113,000 students. More than 650 early childhood
            centers and elementary schools are accredited under the National
            Lutheran School Accreditation program.
          </p>
          <Button
            label="Learn more about the LCMS Church"
            theme="primary"
            href="https://www.lcms.org/"
            classes={["mt-6 self-start"]}
            endIcon={faAngleRight}
          />
        </div>
      </div>
    </>
  );
};

export default AffiliationComponent;
